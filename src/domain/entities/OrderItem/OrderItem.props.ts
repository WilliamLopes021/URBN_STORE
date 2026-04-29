import type { Money } from "../../value-objects/Money";
import type { UniqueEntityId } from "../../value-objects/UniqueEntityId";

export interface OrderItemProps {
  id: UniqueEntityId;
  productId: UniqueEntityId;
  quantity: number;
  unitPrice: Money;
}
