import type { ProductViewModel } from "./product.viewmodel";

export type OrderStatus = "CREATED" | "PENDING" | "SHIPPED" | "DELIVERED" | "CANCELLED";

export interface OrderViewModel {
  id: string;
  date: Date;
  status: OrderStatus;
  total: string;
  products: ProductViewModel[];
}