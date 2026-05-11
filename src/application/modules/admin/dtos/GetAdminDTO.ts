import { Admin } from "@/domain/entities/Admin/Admin";

export interface GetAdminInputDTO {
  id: string;
}

export interface GetAdminOutputDTO {
  admin: Admin;
}