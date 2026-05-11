import type { Payment } from "@/domain/entities/Payment/Payment";

export interface GetPaymentInputDTO {
  id: string;
}

export interface GetPaymentOutputDTO {
  payment: Payment;
}
