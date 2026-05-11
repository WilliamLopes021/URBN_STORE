import axios, {
  AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";
import type {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpResponseWithError,
} from "@/infra/http/HttpClient";

type RetryableRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
  skipAuth?: boolean;
};

export type AuthCallbacks = {
  refresh: () => Promise<void>;
  unauthorized: () => Promise<void>;
};

export class AxiosHttpClient implements HttpClient {
  private client: AxiosInstance;
  private refreshPromise: Promise<void> | null = null;
  private refresh?: () => Promise<void>;
  private unauthorized?: () => Promise<void>;
  private interceptorId?: number;

  constructor({ refresh, unauthorized }: AuthCallbacks) {
    this.refresh = refresh;
    this.unauthorized = unauthorized;
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      withCredentials: true,
    });
    this.setupInterceptors();
  }

  private setupInterceptors() {
    if (this.interceptorId !== undefined) return;

    this.interceptorId = this.client.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (!error.config) return Promise.reject(this.normalizeError(error));

        if (!this.refresh || !this.unauthorized) {
          return Promise.reject(this.normalizeError(error));
        }
        const originalRequest = error.config as RetryableRequestConfig;

        // Se a requisição não tiver autenticação, não fazer nada
        if (originalRequest.skipAuth) {
          return Promise.reject(this.normalizeError(error));
        }

        // só permitir a entrada no refresh se a requisição não foi uma tentativa de refresh
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          if (!this.refreshPromise) {
            this.refreshPromise = this.refresh().finally(() => {
              this.refreshPromise = null;
            });
          }

          try {
            await this.refreshPromise;
          } catch (err) {
            await this.unauthorized();
            return Promise.reject(this.normalizeError(err));
          }

          return this.client(originalRequest);
        }

        if (originalRequest._retry && error.response?.status === 401) {
          await this.unauthorized();
        }

        return Promise.reject(this.normalizeError(error));
      },
    );
  }

  async request<T>(input: HttpRequest): Promise<HttpResponse<T>> {
    const skipAuth = input.skipAuth as boolean | undefined;
    const response = await this.client.request({
      url: input.url,
      method: input.method,
      data: input.body,
      headers: input.headers,
      params: input.params,
      skipAuth: skipAuth ?? false,
    } as RetryableRequestConfig);

    return {
      status: response.status,
      data: response.data,
      headers: response.headers,
    };
  }

  private normalizeError(error: AxiosError): HttpResponseWithError {
    return {
      status: error.response?.status ?? 500,
      error: error.response?.data,
      message: error.message,
    };
  }

  setCallbacks(callbacks: AuthCallbacks) {
    this.refresh = callbacks.refresh;
    this.unauthorized = callbacks.unauthorized;
  }
}
