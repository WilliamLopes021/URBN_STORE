import type { OrderItemProps } from "./OrderItem.props";
import { Money } from "../../value-objects/Money";
import type { UniqueEntityId } from "../../value-objects/UniqueEntityId";

export class OrderItem {
  private props: OrderItemProps;

  private constructor(props: OrderItemProps) {
    this.props = props;
  }

  public static create(props: OrderItemProps): OrderItem {
    return new OrderItem(props);
  }

  public addOneItem(): void {
    this.props.quantity++;
  }

  public removeOneItem(): void {
    if (this.props.quantity === 0) return;
    this.props.quantity--;
  }

  public setUnitPrice(unitPrice: Money): void {
    this.props.unitPrice = unitPrice;
  }

  public getId(): UniqueEntityId {
    return this.props.id;
  }

  public getProductId(): UniqueEntityId {
    return this.props.productId;
  }

  public getQuantity(): number {
    return this.props.quantity;
  }

  public getUnitPrice(): Money {
    return this.props.unitPrice;
  }

  public getSubtotal(): Money {
    return this.props.unitPrice.multiply(this.props.quantity);
  }
}
