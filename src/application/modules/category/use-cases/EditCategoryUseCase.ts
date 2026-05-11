import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { CategoryApiPort } from "@/application/modules/category/ports/CategoryApiPort";
import type { EditCategoryInputDTO } from "../dtos/EditCategoryDTO";

export class EditCategoryUseCase {
  private readonly categoryApiPort: CategoryApiPort;

  constructor(categoryApiPort: CategoryApiPort) {
    this.categoryApiPort = categoryApiPort;
  }

  async execute(input: EditCategoryInputDTO): Promise<void> {
    const { id, name, description, productsIds } = input;
    const idValueObject = UniqueEntityId.create(id);

    await this.categoryApiPort.update(idValueObject, {
      name,
      description,
      productsIds,
    });
  }
}
