import type { CategoryApiPort } from "@/application/modules/category/ports/CategoryApiPort";
import type { GetAllCategoriesOutputDTO } from "../dtos/GetAllCategoriesDTO";

export class GetAllCategoriesUseCase {
  private readonly categoryApiPort: CategoryApiPort;

  constructor(categoryApiPort: CategoryApiPort) {
    this.categoryApiPort = categoryApiPort;
  }

  async execute(): Promise<GetAllCategoriesOutputDTO> {
    const categories = await this.categoryApiPort.findAll();

    return { categories };
  }
}
