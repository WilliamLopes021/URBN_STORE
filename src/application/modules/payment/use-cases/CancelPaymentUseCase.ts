import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { PaymentApiPort } from "@/application/modules/payment/ports/PaymentApiPort";
import type { CancelPaymentInputDTO } from "../dtos/CancelPaymentDTO";

export class CancelPaymentUseCase {
  private readonly paymentApiPort: PaymentApiPort;

  constructor(paymentApiPort: PaymentApiPort) {
    this.paymentApiPort = paymentApiPort;
  }

  async execute(input: CancelPaymentInputDTO): Promise<void> {
    const id = UniqueEntityId.create(input.paymentId);

    await this.paymentApiPort.updateStatus(id, "CANCELED");
  }
}
