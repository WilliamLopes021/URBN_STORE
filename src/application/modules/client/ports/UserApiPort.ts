import type { Client } from "@/domain/entities/Client/Client";
import type { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { Email } from "@/domain/value-objects/Email";
import type { EditClientInputDTO } from "../dtos/EditClientDTO";

export interface UserApiPort {
  create(user: Client): Promise<Client>;
  update(id: UniqueEntityId, user: EditClientInputDTO): Promise<void>;
  delete(id: UniqueEntityId): Promise<void>;
  findById(id: UniqueEntityId): Promise<Client>;
  findByEmail(email: Email): Promise<Client>;
}
