import type { HttpClient } from "@/infra/http/HttpClient";
import type { AuthApiPort } from "@/application/modules/auth/ports/AuthApiPort";
import type { Email } from "@/domain/value-objects/Email";
import type { Password } from "@/domain/value-objects/Password";
import type { LoginOutputDTO } from "@/application/modules/auth/dtos/LoginDTO";

export class AuthApiAdapter implements AuthApiPort {
  private readonly httpClient: HttpClient;
  private readonly basePath = `${import.meta.env.API_URL}/auth`;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async login(email: Email, password: Password): Promise<LoginOutputDTO> {
    const response = await this.httpClient.request<LoginOutputDTO>({
      url: `${this.basePath}/login`,
      method: "POST",
      body: {
        email: email.getValue(),
        password: password.getValue(),
      },
      skipAuth: true,
    });

    const data = response.data;

    return {
      user: data.user,
      expiresAt: new Date(data.expiresAt),
    };
  }

  async logout(): Promise<boolean> {
    try {
      await this.httpClient.request({
        url: `${this.basePath}/logout`,
        method: "POST",
        skipAuth: true,
      });
      return true;
    } catch {
      return false;
    }
  }

  async refresh(): Promise<void> {
    await this.httpClient.request({
      url: `${this.basePath}/refresh`,
      method: "POST",
      // skipAuth é fundamental aqui para que um erro 401 no refresh
      // não dispare o interceptor novamente e cause um loop infinito.
      skipAuth: true, 
    });
  }
}
