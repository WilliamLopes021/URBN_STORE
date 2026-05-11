import type { HttpClient } from "@/infra/http/HttpClient";
import type { CategoryApiPort } from "@/application/modules/category/ports/CategoryApiPort";
import { Category } from "@/domain/entities/Category/Category";
import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { EditCategoryInputDTO } from "@/application/modules/category/dtos/EditCategoryDTO";

export class CategoryApiAdapter implements CategoryApiPort {
  private readonly httpClient: HttpClient;
  private readonly basePath = `${import.meta.env.API_URL}/categories`;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async create(category: Category): Promise<Category> {
    const response = await this.httpClient.request<Category>({
      url: this.basePath,
      method: "POST",
      body: category,
      skipAuth: false,
    });
    return response.data;
  }

  async update(id: UniqueEntityId, category: EditCategoryInputDTO): Promise<void> {
    await this.httpClient.request({
      url: `${this.basePath}/${id.getValue()}`,
      method: "PATCH",
      body: category,
      skipAuth: false,
    });
  }

  async delete(id: UniqueEntityId): Promise<void> {
    await this.httpClient.request({
      url: `${this.basePath}/${id.getValue()}`,
      method: "DELETE",
      skipAuth: false,
    });
  }

  async findAll(): Promise<Category[]> {
    const response = await this.httpClient.request<Category[]>({
      url: this.basePath,
      method: "GET",
      skipAuth: true,
    });
    return response.data;
  }

  async findById(id: UniqueEntityId): Promise<Category> {
    const response = await this.httpClient.request<Category>({
      url: `${this.basePath}/${id.getValue()}`,
      method: "GET",
      skipAuth: true,
    });
    return response.data;
  }

}
