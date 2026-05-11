import { Payment } from "@/domain/entities/Payment/Payment";
import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { IdGenerator } from "@/application/interfaces/ports/IdGenerator";
import type { PaymentApiPort } from "@/application/modules/payment/ports/PaymentApiPort";
import type { OrderApiPort } from "@/application/modules/order/ports/OrderApiPort";
import type { PaymentMethod } from "@/domain/entities/Payment/PaymentMethod";
import type {
  ProcessPaymentInputDTO,
  ProcessPaymentOutputDTO,
} from "../dtos/ProcessPaymentDTO";

export class ProcessPaymentUseCase {
  private readonly idGenerator: IdGenerator;
  private readonly paymentApiPort: PaymentApiPort;
  private readonly orderApiPort: OrderApiPort;

  constructor(
    idGenerator: IdGenerator,
    paymentApiPort: PaymentApiPort,
    orderApiPort: OrderApiPort,
  ) {
    this.idGenerator = idGenerator;
    this.paymentApiPort = paymentApiPort;
    this.orderApiPort = orderApiPort;
  }

  async execute(
    input: ProcessPaymentInputDTO,
  ): Promise<ProcessPaymentOutputDTO> {
    const { orderId, method } = input;

    const orderIdVO = UniqueEntityId.create(orderId);
    const order = await this.orderApiPort.findById(orderIdVO);

    const payment = Payment.create({
      id: this.idGenerator.generateUuid(),
      orderId: order.getId(),
      paymentMethod: method as PaymentMethod,
      amount: order.getTotal(),
      status: "PENDING",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const created = await this.paymentApiPort.create(payment);

    return {
      id: created.getId().getValue(),
      orderId: created.getOrderId().getValue(),
      status: created.getStatus(),
      processedAt: created.getCreatedAt(),
    };
  }
}
