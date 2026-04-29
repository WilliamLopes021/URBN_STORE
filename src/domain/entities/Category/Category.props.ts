import type { Name } from "../../value-objects/Name";
import type { UniqueEntityId } from "../../value-objects/UniqueEntityId";
import type { Product } from "../Product/Product";

export interface CategoryProps {
  id: UniqueEntityId;
  products: Product[];
  name: Name;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}