import type { Money } from "../../value-objects/Money";
import type { OrderStatus } from "./OrderStatus";
import type { UniqueEntityId } from "../../value-objects/UniqueEntityId";
import type { OrderItem } from "../OrderItem/OrderItem";

export interface OrderProps {
  readonly id: UniqueEntityId;
  readonly userId: UniqueEntityId;
  items: OrderItem[];
  total: Money;
  status: OrderStatus;
  paidAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
