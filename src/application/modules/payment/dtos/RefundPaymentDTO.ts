export interface RefundPaymentInputDTO {
  paymentId: string;
  reason?: string;
}

export interface RefundPaymentOutputDTO {
  id: string;
  status: string; // e.g., 'REFUNDED'
  refundedAt: Date;
}
