import type { CategoryViewModel } from "@/interfaces/view-models/category.viewmodel";
import pinkCap from "@/assets/products/pink_cap.png";
import blueCap from "@/assets/products/blue_cap.png";
import shockCap from "@/assets/products/shock_cap.png";
import crown from "@/assets/icons/urbn_crown_icon.png";
import crown2 from "@/assets/icons/urbn_icon_crown_neon.png";
import lightning from "@/assets/icons/urbn_icon_lightning_neon.png";

export const categories: CategoryViewModel[] = [
  {
    id: "1",
    name: "Conjunto Chaos",
    description: "Descrição do produto 1",
    image: pinkCap,
    icon: crown2,
  },
  {
    id: "2",
    name: "Conjunto Gelo",
    description: "Descrição do produto 2",
    image: blueCap,
    icon: crown,
  },
  {
    id: "3",
    name: "Calças Femininas",
    description: "Descrição do produto 3",
    image: shockCap,
    icon: lightning,
  },
];
