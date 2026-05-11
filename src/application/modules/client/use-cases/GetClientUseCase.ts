import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { UserApiPort } from "@/application/modules/client/ports/UserApiPort";
import type { Client } from "@/domain/entities/Client/Client";

export class GetClientUseCase {
  private readonly userApiPort: UserApiPort;

  constructor(userApiPort: UserApiPort) {
    this.userApiPort = userApiPort;
  }

  async execute(id: string): Promise<{ client: Client }> {
    const idValueObject = UniqueEntityId.create(id);

    const client = await this.userApiPort.findById(idValueObject);

    return { client };
  }
}
