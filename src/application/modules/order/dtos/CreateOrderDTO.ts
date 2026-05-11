export interface CreateOrderInputDTO {
  clientId: string;
  items: Array<{
    productId: string;
    quantity: number;
  }>;
}