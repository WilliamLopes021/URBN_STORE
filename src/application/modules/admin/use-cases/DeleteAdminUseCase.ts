import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { DeleteAdminInputDTO } from "../dtos/DeleteAdminDTO";
import type { AdminApiPort } from "../ports/AdminApiPort";

export class DeleteAdminUseCase {
  private readonly adminApiPort: AdminApiPort;

  constructor(adminApiPort: AdminApiPort) {
    this.adminApiPort = adminApiPort;
  }

  async execute(input: DeleteAdminInputDTO): Promise<void> {
    const id = UniqueEntityId.create(input.id);
    await this.adminApiPort.deleteAdmin(id);
  }
}
