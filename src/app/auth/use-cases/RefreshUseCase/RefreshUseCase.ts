import type { AuthApiPort } from "../../../ports/auth/AuthApiPort";

export class RefreshUseCase {
  private apiPort: AuthApiPort;
  constructor(apiPort: AuthApiPort) {
    this.apiPort = apiPort;
  }

  async execute(): Promise<void> {
    try {
      await this.apiPort.refresh();
    } catch (error) {
      throw new Error("Failed to refresh token: ", error);
    }
  }
}
