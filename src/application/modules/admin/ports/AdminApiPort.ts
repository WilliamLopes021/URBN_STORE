import type { Admin } from "@/domain/entities/Admin/Admin";
import type { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { EditAdminInputDTO } from "../dtos/EditAdminDTO";

export interface AdminApiPort {
  createAdmin(admin: Admin): Promise<void>;
  editAdmin(id: UniqueEntityId, admin: EditAdminInputDTO): Promise<void>;
  deleteAdmin(id: UniqueEntityId): Promise<void>;
  getAdmin(id: UniqueEntityId): Promise<Admin>;
}