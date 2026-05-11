import type { HttpClient } from "@/infra/http/HttpClient";
import type { UserApiPort } from "@/application/modules/client/ports/UserApiPort";
import { Client } from "@/domain/entities/Client/Client";
import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import { Email } from "@/domain/value-objects/Email";
import type { EditClientInputDTO } from "@/application/modules/client/dtos/EditClientDTO";

export class ClientApiAdapter implements UserApiPort {
  private readonly httpClient: HttpClient;
  private readonly basePath = `${import.meta.env.API_URL}/users`; // ou /users

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async create(user: Client): Promise<Client> {
    const response = await this.httpClient.request<Client>({
      url: this.basePath,
      method: "POST",
      body: user,
    });
    return response.data;
  }

  async update(id: UniqueEntityId, user: EditClientInputDTO): Promise<void> {
    await this.httpClient.request({
      url: `${this.basePath}/${id.getValue()}`,
      method: "PATCH",
      body: user,
    });
  }

  async delete(id: UniqueEntityId): Promise<void> {
    await this.httpClient.request({
      url: `${this.basePath}/${id.getValue()}`,
      method: "DELETE",
    });
  }

  async findById(id: UniqueEntityId): Promise<Client> {
    const response = await this.httpClient.request<Client>({
      url: `${this.basePath}/${id.getValue()}`,
      method: "GET",
    });
    return response.data;
  }

  async findByEmail(email: Email): Promise<Client> {
    const response = await this.httpClient.request<Client>({
      url: `${this.basePath}/by-email/${email.getValue()}`,
      method: "GET",
    });
    return response.data;
  }

}
