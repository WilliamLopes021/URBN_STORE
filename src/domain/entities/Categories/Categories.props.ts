import type { Name } from "../../value-objects/Name";
import type { UniqueEntityId } from "../../value-objects/UniqueEntityId";

export interface CategoriesProps {
  id: UniqueEntityId;
  name: Name;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}