import type { AuthApiPort } from "../ports/AuthApiPort";
import type { AuthState } from "./model/AuthState";
import { Email } from "../../domain/value-objects/Email";
import { Password } from "../../domain/value-objects/Password";

export class AuthOrchestrator {
  private authApi: AuthApiPort;

  constructor(authApi: AuthApiPort) {
    this.authApi = authApi;
  }

  async login(loginInput: {
    email: string;
    password: string;
  }): Promise<AuthState> {
    try {
      const email = Email.create(loginInput.email);
      const password = Password.create(loginInput.password);
      const authState = await this.authApi.login(email, password);

      return authState;
    } catch (error) {
      throw new Error("Invalid credentials:", error.message);
    }
  }
  async logout(): Promise<AuthState> {
    try {
      await this.authApi.logout();
      return {
        user: null,
        expiresAt: null,
        isLoggedIn: false,
      }
    } catch (error) {
      throw new Error("Logout failed:", error.message);
    }
  }
}
