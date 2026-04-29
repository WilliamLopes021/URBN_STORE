import type { Money } from "../../value-objects/Money";
import type { UniqueEntityId } from "../../value-objects/UniqueEntityId";

export interface OrderItemProps {
  readonly id: UniqueEntityId;
  readonly productId: UniqueEntityId;
  quantity: number;
  unitPrice: Money;
}
