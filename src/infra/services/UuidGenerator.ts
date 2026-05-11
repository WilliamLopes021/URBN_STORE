import { v4 as uuid } from "uuid";

import type { IdGenerator } from "@/application/interfaces/ports/IdGenerator";
import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";

export class UuidGenerator implements IdGenerator {
  generateUuid(): UniqueEntityId {
    return UniqueEntityId.create(uuid());
  }
}
