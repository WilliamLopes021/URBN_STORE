import type { Name } from "../../value-objects/Name";
import type { UniqueEntityId } from "../../value-objects/UniqueEntityId";

export interface CategoryProps {
  id: UniqueEntityId;
  name: Name;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}