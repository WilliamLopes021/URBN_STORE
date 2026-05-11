export interface EditOrderStatusInputDTO {
  id: string;
  status: string; // e.g., 'PAID', 'SHIPPED', 'DELIVERED', 'CANCELED'
}

export interface EditOrderStatusOutputDTO {
  id: string;
  status: string;
  updatedAt: Date;
}
