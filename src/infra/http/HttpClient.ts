export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: unknown;
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
  skipAuth?: boolean;
};

export type HttpResponse<T = unknown> = {
  status: number;
  data: T;
  headers: Record<string, unknown>;
};

export type HttpResponseWithError<E = unknown> = {
  status: number;
  error: E;
  message: string;
};

export interface HttpClient {
  request<T = unknown>(input: HttpRequest): Promise<HttpResponse<T>>;
}
