import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { CategoryApiPort } from "@/application/modules/category/ports/CategoryApiPort";
import type {
  GetCategoryInputDTO,
  GetCategoryOutputDTO,
} from "../dtos/GetCategoryDTO";

export class GetCategoryUseCase {
  private readonly categoryApiPort: CategoryApiPort;

  constructor(categoryApiPort: CategoryApiPort) {
    this.categoryApiPort = categoryApiPort;
  }

  async execute(input: GetCategoryInputDTO): Promise<GetCategoryOutputDTO> {
    const id = UniqueEntityId.create(input.id);
    const category = await this.categoryApiPort.findById(id);

    return { category };
  }
}
