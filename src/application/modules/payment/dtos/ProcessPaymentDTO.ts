export interface ProcessPaymentInputDTO {
  orderId: string;
  method: string; // e.g., 'CREDIT_CARD', 'PIX', 'BOLETO'
  amount: number;
}

export interface ProcessPaymentOutputDTO {
  id: string;
  orderId: string;
  status: string; // e.g., 'APPROVED', 'DECLINED', 'PENDING'
  processedAt: Date;
}
