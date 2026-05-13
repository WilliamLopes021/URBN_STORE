import type { CategoryViewModel } from "@/application/interfaces/view-models/category.viewmodel";
import img from "@/assets/products/urbn_product_hoodie_black.png";
export const categories: CategoryViewModel[] = [
  {
    id: "1",
    name: "Blusas",
    description: "Descrição do produto 1",
    image: img,
  },
  {
    id: "2",
    name: "Moletons",
    description: "Descrição do produto 2",
    image: img,
  },
  {
    id: "3",
    name: "Calças",
    description: "Descrição do produto 3",
    image: img,
  },
  {
    id: "4",
    name: "Bonés",
    description: "Descrição do produto 4",
    image: img,
  },
];
