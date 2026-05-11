import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { ProductApiPort } from "@/application/modules/product/ports/ProductApiPort";
import type { DeleteProductInputDTO } from "../dtos/DeleteProductDTO";

export class DeleteProductUseCase {
  private readonly productApiPort: ProductApiPort;

  constructor(productApiPort: ProductApiPort) {
    this.productApiPort = productApiPort;
  }

  async execute(input: DeleteProductInputDTO): Promise<void> {
    const id = UniqueEntityId.create(input.id);
    await this.productApiPort.delete(id);
  }
}
