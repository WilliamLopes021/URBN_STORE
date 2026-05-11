import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { OrderApiPort } from "@/application/modules/order/ports/OrderApiPort";
import type {
  EditOrderStatusInputDTO,
} from "../dtos/EditOrderStatusDTO";

export class EditOrderUseCase {
  private readonly orderApiPort: OrderApiPort;

  constructor(orderApiPort: OrderApiPort) {
    this.orderApiPort = orderApiPort;
  }

  async execute(
    input: EditOrderStatusInputDTO,
  ): Promise<void> {
    const id = UniqueEntityId.create(input.id);  

    await this.orderApiPort.updateOrder(id, input);
  }
}
