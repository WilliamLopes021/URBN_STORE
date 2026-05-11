import type { Money } from "../../value-objects/Money";
import type { Name } from "../../value-objects/Name";
import type { UniqueEntityId } from "../../value-objects/UniqueEntityId";

export interface ProductProps {
  readonly id: UniqueEntityId;
  categoryId: UniqueEntityId;
  name: Name;
  description: string;
  price: Money;
  stock: number;
  images: string[];
  createdAt: Date;
  updatedAt: Date;  
}