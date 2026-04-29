import type { Money } from "../../value-objects/Money";
import type { Name } from "../../value-objects/Name";
import type { UniqueEntityId } from "../../value-objects/UniqueEntityId";
import type { Category } from "../Category/Category";

export interface ProductProps {
  id: UniqueEntityId;
  name: Name;
  description: string;
  price: Money;
  category: Category;
  stock: number;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}