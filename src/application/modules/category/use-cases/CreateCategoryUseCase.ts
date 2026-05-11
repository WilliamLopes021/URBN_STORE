import { Category } from "@/domain/entities/Category/Category";
import { Name } from "@/domain/value-objects/Name";
import type { IdGenerator } from "@/application/interfaces/ports/IdGenerator";
import type { CategoryApiPort } from "@/application/modules/category/ports/CategoryApiPort";
import type { CreateCategoryInputDTO } from "../dtos/CreateCategoryDTO";

export class CreateCategoryUseCase {
  private readonly idGenerator: IdGenerator;
  private readonly categoryApiPort: CategoryApiPort;

  constructor(idGenerator: IdGenerator, categoryApiPort: CategoryApiPort) {
    this.idGenerator = idGenerator;
    this.categoryApiPort = categoryApiPort;
  }

  async execute(input: CreateCategoryInputDTO): Promise<Category> {
    const { name, description } = input;

    const id = this.idGenerator.generateUuid();
    const nameOrError = Name.create(name);

    const category = Category.create({
      id,
      name: nameOrError,
      description,
      productsIds: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.categoryApiPort.create(category);

    return category;
  }
}
