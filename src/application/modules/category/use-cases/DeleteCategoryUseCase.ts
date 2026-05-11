import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { CategoryApiPort } from "@/application/modules/category/ports/CategoryApiPort";
import type { DeleteCategoryInputDTO } from "../dtos/DeleteCategoryDTO";

export class DeleteCategoryUseCase {
  private readonly categoryApiPort: CategoryApiPort;

  constructor(categoryApiPort: CategoryApiPort) {
    this.categoryApiPort = categoryApiPort;
  }

  async execute(input: DeleteCategoryInputDTO): Promise<void> {
    const id = UniqueEntityId.create(input.id);
    await this.categoryApiPort.delete(id);
  }
}
