import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { OrderApiPort } from "@/application/modules/order/ports/OrderApiPort";
import type { GetOrderInputDTO, GetOrderOutputDTO } from "../dtos/GetOrderDTO";

export class GetOrderUseCase {
  private readonly orderApiPort: OrderApiPort;

  constructor(orderApiPort: OrderApiPort) {
    this.orderApiPort = orderApiPort;
  }

  async execute(input: GetOrderInputDTO): Promise<GetOrderOutputDTO> {
    const id = UniqueEntityId.create(input.id);
    const order = await this.orderApiPort.findById(id);

    return { order };
  }
}
