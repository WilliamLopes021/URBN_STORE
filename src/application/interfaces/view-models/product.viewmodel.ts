import type { CategoryViewModel } from "./category.viewmodel";

export interface ProductViewModel {
  id: string;
  category: CategoryViewModel;
  name: string;
  description: string;
  price: string;
  stock: number | "Esgotado";
  images: string[];
  sizes: string[];
}
