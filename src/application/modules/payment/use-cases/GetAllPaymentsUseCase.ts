import type { PaymentApiPort } from "@/application/modules/payment/ports/PaymentApiPort";
import type { GetAllPaymentsOutputDTO } from "../dtos/GetAllPaymentsDTO";

export class GetAllPaymentsUseCase {
  private readonly paymentApiPort: PaymentApiPort;

  constructor(paymentApiPort: PaymentApiPort) {
    this.paymentApiPort = paymentApiPort;
  }

  async execute(): Promise<GetAllPaymentsOutputDTO> {
    const payments = await this.paymentApiPort.findAll();

    return { payments };
  }
}
