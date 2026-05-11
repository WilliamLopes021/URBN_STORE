import type { Order } from "@/domain/entities/Order/Order";

export interface GetOrderInputDTO {
  id: string;
}

export interface GetOrderOutputDTO {
  order: Order;
}
