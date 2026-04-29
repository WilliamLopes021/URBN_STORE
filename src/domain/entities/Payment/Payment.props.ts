import type { UniqueEntityId } from "../../value-objects/UniqueEntityId";
import type { Money } from "../../value-objects/Money";
import type { PaymentStatus } from "./PaymentStatus";
import type { PaymentMethod } from "./PaymentMethod";

export interface PaymentProps {
  readonly id: UniqueEntityId;
  readonly orderId: UniqueEntityId;
  paymentMethod: PaymentMethod;
  amount: Money;
  status: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;
}
