import type { Category } from "@/domain/entities/Category/Category";
import type { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { EditCategoryInputDTO } from "../dtos/EditCategoryDTO";

export interface CategoryApiPort {
  create(category: Category): Promise<Category>;
  update(
    id: UniqueEntityId,
    category: Omit<EditCategoryInputDTO, "id">,
  ): Promise<void>;
  delete(id: UniqueEntityId): Promise<void>;
  findAll(): Promise<Category[]>;
  findById(id: UniqueEntityId): Promise<Category>;
}
