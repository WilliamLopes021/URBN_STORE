import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { AdminApiPort } from "../ports/AdminApiPort";
import type { GetAdminInputDTO, GetAdminOutputDTO } from "../dtos/GetAdminDTO";

export class GetAdminUseCase {
  private readonly adminApiPort: AdminApiPort;

  constructor(adminApiPort: AdminApiPort) {
    this.adminApiPort = adminApiPort;
  }

  async execute(input: GetAdminInputDTO): Promise<GetAdminOutputDTO> {
    const id = UniqueEntityId.create(input.id);
    const admin = await this.adminApiPort.getAdmin(id);

    return { admin };
  }
}
