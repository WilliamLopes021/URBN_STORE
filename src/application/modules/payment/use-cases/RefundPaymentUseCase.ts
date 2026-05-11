import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { PaymentApiPort } from "@/application/modules/payment/ports/PaymentApiPort";
import type {
  RefundPaymentInputDTO,
  RefundPaymentOutputDTO,
} from "../dtos/RefundPaymentDTO";

export class RefundPaymentUseCase {
  private readonly paymentApiPort: PaymentApiPort;

  constructor(paymentApiPort: PaymentApiPort) {
    this.paymentApiPort = paymentApiPort;
  }

  async execute(input: RefundPaymentInputDTO): Promise<RefundPaymentOutputDTO> {
    const id = UniqueEntityId.create(input.paymentId);

    await this.paymentApiPort.updateStatus(id, "REFUNDED");

    return {
      id: id.getValue(),
      status: "REFUNDED",
      refundedAt: new Date(),
    };
  }
}
