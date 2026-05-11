import type { HttpClient } from "@/infra/http/HttpClient";
import type { OrderApiPort } from "@/application/modules/order/ports/OrderApiPort";
import type { Order } from "@/domain/entities/Order/Order";
import type { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { EditOrderStatusInputDTO } from "@/application/modules/order/dtos/EditOrderStatusDTO";

export class OrderApiAdapter implements OrderApiPort {
  private readonly httpClient: HttpClient;
  private readonly basePath = `${import.meta.env.API_URL}/orders`;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async create(order: Order): Promise<Order> {
    const response = await this.httpClient.request<Order>({
      url: this.basePath,
      method: "POST",
      body: order,
      skipAuth: false,
    });
    return response.data;
  }

  async updateOrder(
    id: UniqueEntityId,
    newOrder: EditOrderStatusInputDTO,
  ): Promise<void> {
    await this.httpClient.request({
      url: `${this.basePath}/${id.getValue()}`,
      method: "PATCH",
      body: newOrder,
    });
  }

  async cancel(id: UniqueEntityId): Promise<void> {
    await this.httpClient.request({
      url: `${this.basePath}/${id.getValue()}/cancel`,
      method: "POST", // ou PATCH
    });
  }

  async findById(id: UniqueEntityId): Promise<Order> {
    const response = await this.httpClient.request<Order>({
      url: `${this.basePath}/${id.getValue()}`,
      method: "GET",
      skipAuth: false,
    });
    return response.data;
  }

  async findByUserId(userId: UniqueEntityId): Promise<Order[]> {
    const response = await this.httpClient.request<Order[]>({
      url: `/users/${userId.getValue()}/orders`, // ou outra rota apropriada
      method: "GET",
      skipAuth: false,
    });
    return response.data;
  }
}
