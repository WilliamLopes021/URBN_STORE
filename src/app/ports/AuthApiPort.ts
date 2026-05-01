import type { Email } from "../../domain/value-objects/Email";
import type { Password } from "../../domain/value-objects/Password";
import type { AuthState } from "../auth/model/AuthState";

export interface AuthApiPort {
  login(email: Email, password: Password): Promise<AuthState>;
  logout(): Promise<AuthState>;
}