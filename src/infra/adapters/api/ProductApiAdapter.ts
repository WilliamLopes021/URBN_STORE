import type { HttpClient } from "@/infra/http/HttpClient";
import type { ProductApiPort } from "@/application/modules/product/ports/ProductApiPort";
import { Product } from "@/domain/entities/Product/Product";
import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { EditProductInputDTO } from "@/application/modules/product/dtos/EditProductDTO";

export class ProductApiAdapter implements ProductApiPort {
  private readonly httpClient: HttpClient;
  private readonly basePath = "/products";

  // Aqui você pode injetar uma MoneyFactory caso precise mapear `data.price` de forma mais complexa
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async create(product: Product): Promise<Product> {
    const response = await this.httpClient.request<Product>({
      url: this.basePath,
      method: "POST",
      body: product,
    });
    return response.data;
  }

  async update(id: UniqueEntityId, product: EditProductInputDTO): Promise<void> {
    await this.httpClient.request({
      url: `${this.basePath}/${id.getValue()}`,
      method: "PATCH",
      body: product,
    });
  }

  async delete(id: UniqueEntityId): Promise<void> {
    await this.httpClient.request({
      url: `${this.basePath}/${id.getValue()}`,
      method: "DELETE",
    });
  }

  async findAll(): Promise<Product[]> {
    const response = await this.httpClient.request<Product[]>({
      url: this.basePath,
      method: "GET",
    });
    return response.data;
  }

  async findById(id: UniqueEntityId): Promise<Product> {
    const response = await this.httpClient.request<Product>({
      url: `${this.basePath}/${id.getValue()}`,
      method: "GET",
    });
    return response.data;
  }
}
