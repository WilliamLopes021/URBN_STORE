import axios, {
  AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";
import type {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from "@/infra/http/HttpClient";

type RetryableRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

export class AxiosHttpClient implements HttpClient {
  private client: AxiosInstance;
  private refreshPromise: Promise<void> | null = null;
  private refreshUseCase: () => Promise<void>;
  private logoutUseCase: () => Promise<void>;

  constructor(
    logoutUseCase?: () => Promise<void>,
    refreshUseCase?: () => Promise<void>,
  ) {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      withCredentials: true,
    });
    if (refreshUseCase && logoutUseCase) {
      this.refreshUseCase = refreshUseCase;
      this.logoutUseCase = logoutUseCase;
      this.setupInterceptors();
    }
  }

  private setupInterceptors() {
    this.client.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        
        if (!error.config) {
          return Promise.reject(this.normalizeError(error));
        }

        const originalRequest = error.config as RetryableRequestConfig;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          if (!this.refreshPromise) {
            this.refreshPromise = this.refreshUseCase().finally(() => {
              this.refreshPromise = null;
            });
          }

          await this.refreshPromise;
          return this.client(originalRequest).catch(async (error: AxiosError) => {
            await this.logoutUseCase();
            return this.normalizeError(error);
          });
        }

        if (originalRequest._retry && error.response?.status === 401) {
          await this.logoutUseCase();
        }

        return Promise.reject(this.normalizeError(error));
      },
    );
  }

  async request<T>(input: HttpRequest): Promise<HttpResponse<T>> {
    const response = await this.client.request({
      url: input.url,
      method: input.method,
      data: input.body,
      headers: input.headers,
      params: input.params,
    });

    return {
      status: response.status,
      data: response.data,
      headers: response.headers,
    };
  }

  private normalizeError(error: AxiosError) {
    return {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    };
  }
}
