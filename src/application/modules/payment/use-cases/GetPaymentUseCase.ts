import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { PaymentApiPort } from "@/application/modules/payment/ports/PaymentApiPort";
import type {
  GetPaymentInputDTO,
  GetPaymentOutputDTO,
} from "../dtos/GetPaymentDTO";

export class GetPaymentUseCase {
  private readonly paymentApiPort: PaymentApiPort;

  constructor(paymentApiPort: PaymentApiPort) {
    this.paymentApiPort = paymentApiPort;
  }

  async execute(input: GetPaymentInputDTO): Promise<GetPaymentOutputDTO> {
    const id = UniqueEntityId.create(input.id);
    const payment = await this.paymentApiPort.findById(id);

    return { payment };
  }
}
