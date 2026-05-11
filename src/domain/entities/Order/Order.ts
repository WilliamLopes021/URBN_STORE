import type { OrderProps } from "./Order.props";
import type { UniqueEntityId } from "../../value-objects/UniqueEntityId";
import { Money } from "../../value-objects/Money";
import type { OrderStatus } from "./OrderStatus";
import type { OrderItem } from "../OrderItem/OrderItem";

export class Order {
  private props: OrderProps;

  private constructor(props: OrderProps) {
    this.props = props;
  }

  public static create(props: OrderProps): Order {
    return new Order(props);
  }

  public addItem(item: OrderItem): void {
    const { items } = this.props;
    const itemFound = items.find((i) => i.getId().equals(item.getId()));
    if (itemFound) {
      itemFound.addOneItem();
      return;
    }

    this.props.items.push(item);
  }

  public removeItem(item: OrderItem): void {
    const { items } = this.props;
    const itemFound = items.find((i) => i.getId().equals(item.getId()));
    if (itemFound.getQuantity() >= 1) {
      itemFound.removeOneItem();
      return;
    }

    this.props.items.filter((i) => !i.getId().equals(item.getId()));
  }

  public getItems(): OrderItem[] {
    return this.props.items;
  }
  public getId(): UniqueEntityId {
    return this.props.id;
  }

  public getUserId(): UniqueEntityId {
    return this.props.userId;
  }

  public getTotal(): Money {
    const items = this.props.items.map((item) => item.getSubtotal());
    const total = items.reduce(
      (acc, item) => acc.add(item),
      Money.create(0, items[0].getCurrency()),
    );
    return total;
  }

  public getStatus(): OrderStatus {
    return this.props.status;
  }

  public getPaidAt(): Date | null {
    return this.props.paidAt;
  }

  public getTimeStamps(): { createdAt: Date; updatedAt: Date } {
    return {
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
    };
  }
}
