import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { UserApiPort } from "@/application/modules/client/ports/UserApiPort";
import type { DeleteClientInputDTO } from "../dtos/DeleteClientDTO";

export class DeleteClientUseCase {
  private readonly userApiPort: UserApiPort;

  constructor(userApiPort: UserApiPort) {
    this.userApiPort = userApiPort;
  }

  async execute(input: DeleteClientInputDTO): Promise<void> {
    const { id } = input;
    const idValueObject = UniqueEntityId.create(id);

    await this.userApiPort.delete(idValueObject);
  }
}
