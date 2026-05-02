export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: unknown;
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
};

export type HttpResponse<T = unknown> = {
  status: number;
  data: T;
  headers: Record<string, unknown>;
};

export interface HttpClient {
  request<T = unknown>(input: HttpRequest): Promise<HttpResponse<T>>;
}
