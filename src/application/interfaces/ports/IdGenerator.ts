import type { UniqueEntityId } from "../../../domain/value-objects/UniqueEntityId";

export interface IdGenerator {
  generateUuid(): UniqueEntityId;
}
