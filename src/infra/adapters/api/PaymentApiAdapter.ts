import type { HttpClient } from "@/infra/http/HttpClient";
import type { PaymentApiPort } from "@/application/modules/payment/ports/PaymentApiPort";
import type { Payment } from "@/domain/entities/Payment/Payment";
import type { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { PaymentStatus } from "@/domain/entities/Payment/PaymentStatus";

export class PaymentApiAdapter implements PaymentApiPort {
  private readonly httpClient: HttpClient;
  private readonly basePath = `${import.meta.env.API_URL}/payments`;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async create(payment: Payment): Promise<Payment> {
    const response = await this.httpClient.request<Payment>({
      url: this.basePath,
      method: "POST",
      body: payment,
    });
    return response.data;
  }

  async updateStatus(id: UniqueEntityId, status: PaymentStatus): Promise<void> {
    await this.httpClient.request({
      url: `${this.basePath}/${id.getValue()}/status`,
      method: "PATCH",
      body: { status }, // ou da forma como o backend espera
    });
  }

  async findById(id: UniqueEntityId): Promise<Payment> {
    const response = await this.httpClient.request<Payment>({
      url: `${this.basePath}/${id.getValue()}`,
      method: "GET",
    });
    return response.data;
  }

  async findByOrderId(orderId: UniqueEntityId): Promise<Payment[]> {
    const response = await this.httpClient.request<Payment[]>({
      url: `/orders/${orderId.getValue()}/payments`,
      method: "GET",
    });
    return response.data;
  }

  async findAll(): Promise<Payment[]> {
    const response = await this.httpClient.request<Payment[]>({
      url: this.basePath,
      method: "GET",
    });
    return response.data;
  }
}
