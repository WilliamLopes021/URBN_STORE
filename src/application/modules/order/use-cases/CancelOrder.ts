import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { OrderApiPort } from "@/application/modules/order/ports/OrderApiPort";

export class CancelOrderUseCase {
  private readonly orderApiPort: OrderApiPort;

  constructor(orderApiPort: OrderApiPort) {
    this.orderApiPort = orderApiPort;
  }

  async execute(id: string): Promise<void> {
    const idValueObject = UniqueEntityId.create(id);

    await this.orderApiPort.cancel(idValueObject);
  }
}
