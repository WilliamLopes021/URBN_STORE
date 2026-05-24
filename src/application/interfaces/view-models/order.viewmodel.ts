import type { OrderStatus } from "@/domain/entities/Order/OrderStatus";
import type { ProductViewModel } from "./product.viewmodel";

export interface OrderViewModel {
  id: string;
  date: Date;
  status: OrderStatus;
  total: string;
  products: ProductViewModel[];
}