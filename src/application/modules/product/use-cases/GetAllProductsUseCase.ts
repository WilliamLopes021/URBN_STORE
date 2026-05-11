import type { Product } from "@/domain/entities/Product/Product";
import type { ProductApiPort } from "@/application/modules/product/ports/ProductApiPort";


export class GetAllProductsUseCase {
  private readonly productApiPort: ProductApiPort;

  constructor(productApiPort: ProductApiPort) {
    this.productApiPort = productApiPort;
  }

  async execute(): Promise<Product[]> {
    const products = await this.productApiPort.findAll();

    return products;
  }
}
