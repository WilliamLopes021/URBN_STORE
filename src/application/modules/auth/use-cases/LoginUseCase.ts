import { Email } from "@/domain/value-objects/Email";
import { Password } from "@/domain/value-objects/Password";
import type { AuthApiPort } from "../ports/AuthApiPort";
import type {
  LoginInputDTO,
  LoginOutputDTO,
} from "@/application/modules/auth/dtos/LoginDTO";

export class LoginUseCase {
  private apiPort: AuthApiPort;

  constructor(apiPort: AuthApiPort) {
    this.apiPort = apiPort;
  }

  async execute(input: LoginInputDTO): Promise<LoginOutputDTO> {
    const email = Email.create(input.email);
    const password = Password.create(input.password);

    try {
      const result = await this.apiPort.login(email, password);
      return {
        user: result?.user,
        expiresAt: result?.expiresAt,
      };
    } catch (error) {
      throw new Error("Invalid credentials:", error.message);
    }
  }
}
