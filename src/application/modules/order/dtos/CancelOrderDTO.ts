export interface CancelOrderInputDTO {
  id: string;
  reason?: string;
}

export interface CancelOrderOutputDTO {
  id: string;
  status: string;
  canceledAt: Date;
}
