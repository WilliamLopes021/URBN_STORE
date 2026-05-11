import type { HttpClient } from "@/infra/http/HttpClient";
import type { AdminApiPort } from "@/application/modules/admin/ports/AdminApiPort";
import { Admin } from "@/domain/entities/Admin/Admin";
import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { EditAdminInputDTO } from "@/application/modules/admin/dtos/EditAdminDTO";

export class AdminApiAdapter implements AdminApiPort {
  private readonly httpClient: HttpClient;
  private readonly basePath = `${import.meta.env.API_URL}/admins`;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async createAdmin(admin: Admin): Promise<void> {
    await this.httpClient.request({
      url: this.basePath,
      method: "POST",
      body: admin,
      skipAuth: true,
    });
  }

  async editAdmin(id: UniqueEntityId, admin: EditAdminInputDTO): Promise<void> {
    await this.httpClient.request({
      url: `${this.basePath}/${id.getValue()}`,
      method: "PATCH",
      body: admin,
      skipAuth: false,
    });
  }

  async deleteAdmin(id: UniqueEntityId): Promise<void> {
    await this.httpClient.request({
      url: `${this.basePath}/${id.getValue()}`,
      method: "DELETE",
      skipAuth: false,
    });
  }

  async getAdmin(id: UniqueEntityId): Promise<Admin> {
    const response = await this.httpClient.request<Admin>({
      url: `${this.basePath}/${id.getValue()}`,
      method: "GET",
      skipAuth: false,
    });

    return response.data;
  }
}
