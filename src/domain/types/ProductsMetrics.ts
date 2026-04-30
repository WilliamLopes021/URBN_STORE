import type { UniqueEntityId } from "../value-objects/UniqueEntityId";
import type { Money } from "../value-objects/Money";

export interface ProductMetrics {
  productId: UniqueEntityId;
  sold: number;
  total: Money;
  soldDate: Date;
}
