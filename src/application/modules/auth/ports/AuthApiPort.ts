import type { LoginOutputDTO } from "@/application/modules/auth/dtos/LoginDTO";
import type { Email } from "@/domain/value-objects/Email";
import type { Password } from "@/domain/value-objects/Password";

export interface AuthApiPort {
  login(email: Email, password: Password): Promise<LoginOutputDTO>;
  logout(): Promise<boolean>;
  refresh(): Promise<void>;
}
