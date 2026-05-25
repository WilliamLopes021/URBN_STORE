import type { ProductViewModel } from "./product.viewmodel";

export interface OrderItemViewModel {
  id: string;
  product: ProductViewModel;
  quantity: number;
  size: string;
  unitPrice: string;
}







