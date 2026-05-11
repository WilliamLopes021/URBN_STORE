import { Order } from "@/domain/entities/Order/Order";
import { OrderItem } from "@/domain/entities/OrderItem/OrderItem";
import { Money } from "@/domain/value-objects/Money";
import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { IdGenerator } from "@/application/interfaces/ports/IdGenerator";
import type { OrderApiPort } from "@/application/modules/order/ports/OrderApiPort";
import type { ProductApiPort } from "@/application/modules/product/ports/ProductApiPort";
import type { CreateOrderInputDTO } from "../dtos/CreateOrderDTO";

export class CreateOrderUseCase {
  private readonly idGenerator: IdGenerator;
  private readonly orderApiPort: OrderApiPort;
  private readonly productApiPort: ProductApiPort;

  constructor(
    idGenerator: IdGenerator,
    orderApiPort: OrderApiPort,
    productApiPort: ProductApiPort,
  ) {
    this.idGenerator = idGenerator;
    this.orderApiPort = orderApiPort;
    this.productApiPort = productApiPort;
  }

  async execute(input: CreateOrderInputDTO): Promise<Order> {
    const { clientId, items } = input;

    const orderId = this.idGenerator.generateUuid();
    const userId = UniqueEntityId.create(clientId);

    const orderItems: OrderItem[] = await Promise.all(
      items.map(async ({ productId, quantity }) => {
        const product = await this.productApiPort.findById(
          UniqueEntityId.create(productId),
        );

        return OrderItem.create({
          id: this.idGenerator.generateUuid(),
          productId: product.getId(),
          quantity,
          unitPrice: product.getPrice(),
        });
      }),
    );

    const total = orderItems.reduce(
      (acc, item) => {
        const subtotal = item.getSubtotal();
        return acc.add(subtotal);
      },
      Money.create(0, orderItems[0].getUnitPrice().getCurrency()),
    );

    const order = Order.create({
      id: orderId,
      userId,
      items: orderItems,
      total,
      status: "CREATED",
      paidAt: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return this.orderApiPort.create(order);
  }
}
