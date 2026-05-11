import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { ProductApiPort } from "@/application/modules/product/ports/ProductApiPort";
import type { EditProductInputDTO } from "../dtos/EditProductDTO";

export class EditProductUseCase {
  private readonly productApiPort: ProductApiPort;

  constructor(productApiPort: ProductApiPort) {
    this.productApiPort = productApiPort;
  }

  async execute(input: EditProductInputDTO): Promise<void> {
    const idVO = UniqueEntityId.create(input.id);
    await this.productApiPort.update(idVO, input);
  }
}
