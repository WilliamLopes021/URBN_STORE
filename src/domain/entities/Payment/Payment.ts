import type { PaymentProps } from "./Payment.props";
import type { UniqueEntityId } from "../../value-objects/UniqueEntityId";
import type { Money } from "../../value-objects/Money";
import type { PaymentStatus } from "./PaymentStatus";
import type { PaymentMethod } from "./PaymentMethod";

export class Payment {
  private props: PaymentProps;

  private constructor(props: PaymentProps) {
    this.props = props;
  }

  public static create(props: PaymentProps): Payment {
    return new Payment(props);
  }

  public updatePaymentMethod(paymentMethod: PaymentMethod): void {
    this.props.paymentMethod = paymentMethod;
    this.props.updatedAt = new Date();
  }

  public updateAmount(amount: Money): void {
    this.props.amount = amount;
    this.props.updatedAt = new Date();
  }

  public updateStatus(status: PaymentStatus): void {
    this.props.status = status;
    this.props.updatedAt = new Date();
  }

  public getId(): UniqueEntityId {
    return this.props.id;
  }

  public getOrderId(): UniqueEntityId {
    return this.props.orderId;
  }

  public getPaymentMethod(): string {
    return this.props.paymentMethod;
  }

  public getAmount(): Money {
    return this.props.amount;
  }

  public getStatus(): PaymentStatus {
    return this.props.status;
  }

  public getCreatedAt(): Date {
    return this.props.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.props.updatedAt;
  }
}
