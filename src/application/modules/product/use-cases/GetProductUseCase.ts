import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { ProductApiPort } from "@/application/modules/product/ports/ProductApiPort";
import type { GetProductInputDTO } from "../dtos/GetProductDTO";
import type { Product } from "@/domain/entities/Product/Product";

export class GetProductUseCase {
  private readonly productApiPort: ProductApiPort;

  constructor(productApiPort: ProductApiPort) {
    this.productApiPort = productApiPort;
  }

  async execute(input: GetProductInputDTO): Promise<Product> {
    const id = UniqueEntityId.create(input.id);
    const product = await this.productApiPort.findById(id);

    return product;
  }
}
