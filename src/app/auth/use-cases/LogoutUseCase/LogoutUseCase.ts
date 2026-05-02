import type { AuthApiPort } from "../../../ports/auth/AuthApiPort";

export class LogoutUseCase {
  private apiPort: AuthApiPort;

  constructor(apiPort: AuthApiPort) {
    this.apiPort = apiPort;
  }

  async execute(): Promise<void> {
    try {
      await this.apiPort.logout();
      
    } catch (error) {
      throw new Error("Logout failed:", error.message);
    }
  }
}
