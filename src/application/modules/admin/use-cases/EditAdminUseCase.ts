import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { EditAdminInputDTO } from "../dtos/EditAdminDTO";
import type { AdminApiPort } from "../ports/AdminApiPort";

export class EditAdminUseCase {
  private readonly adminApiPort: AdminApiPort;

  constructor(adminApiPort: AdminApiPort) {
    this.adminApiPort = adminApiPort;
  }

  async execute(id: string, input: EditAdminInputDTO): Promise<void> {
    const idValueObject = UniqueEntityId.create(id);
    await this.adminApiPort.editAdmin(idValueObject, input);
  }
}
