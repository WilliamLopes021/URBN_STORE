export interface CancelPaymentInputDTO {
  paymentId: string;
}

export interface CancelPaymentOutputDTO {
  id: string;
  status: string;
  canceledAt: Date;
}
