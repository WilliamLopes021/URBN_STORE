import type { ProductViewModel } from "@/interfaces/view-models/product.viewmodel";
import img1 from "@/assets/models/image.png";
import img2 from "@/assets/models/urbn_model_female_2.png";
import img3 from "@/assets/models/urbn_model_male_1.png";
import img4 from "@/assets/models/urbn_model_male_2.png";
import pinkCap from "@/assets/products/pink_cap.png";
import pinkHoodie from "@/assets/products/pink_hoodie.png";
import pinkPants from "@/assets/products/pink_pants.png";
import blueCap from "@/assets/products/blue_cap.png";
import bluePants from "@/assets/products/blue_pants.png";
import blueHoodie from "@/assets/products/blue_hoodie.png";
import shockCap from "@/assets/products/shock_cap.png";
import shockHoodie from "@/assets/products/shock_hoodie.png";
import shockPants from "@/assets/products/shock_pants.png";

export const products: ProductViewModel[] = [
  {
    id: "1",
    category: {
      id: "10",
      name: "Camiseta",
      description: "Descrição do produto 1",
    },
    name: "Produto 1",
    description: "Descrição do produto 1",
    price: "R$100,00",
    stock: 10,
    images: [img1, img2, img4],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "2",
    category: {
      id: "11",
      name: "Camiseta",
      description: "Descrição do produto 2",
    },
    name: "Produto 2",
    description: "Descrição do produto 2",
    price: "R$200,00",
    stock: 0,
    images: [img2, img2, img2],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "3",
    category: {
      id: "12",
      name: "Camiseta",
      description: "Descrição do produto 3",
    },
    name: "Produto 3",
    description: "Descrição do produto 3",
    price: "R$300,00",
    stock: 10,
    images: [img3, img3, img3],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "4",
    category: {
      id: "13",
      name: "Camiseta",
      description: "Descrição do produto 4",
    },
    name: "Produto 4",
    description: "Descrição do produto 4",
    price: "R$400,00",
    stock: 10,
    images: [img4, img4, img4],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "5",
    category: {
      id: "13",
      name: "Camiseta",
      description: "Descrição do produto 4",
    },
    name: "Produto 4",
    description: "Descrição do produto 4",
    price: "R$400,00",
    stock: 10,
    images: [img4, img4, img4],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "6",
    category: {
      id: "13",
      name: "Camiseta",
      description: "Descrição do produto 4",
    },
    name: "Produto 4",
    description: "Descrição do produto 4",
    price: "R$400,00",
    stock: 10,
    images: [img4, img4, img4],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "7",
    category: {
      id: "13",
      name: "Camiseta",
      description: "Descrição do produto 4",
    },
    name: "Produto 4",
    description: "Descrição do produto 4",
    price: "R$400,00",
    stock: 10,
    images: [img4, img4, img4],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "8",
    category: {
      id: "13",
      name: "Camiseta",
      description: "Descrição do produto 4",
    },
    name: "Produto 4",
    description: "Descrição do produto 4",
    price: "R$400,00",
    stock: 10,
    images: [img4, img4, img4],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "9",
    category: {
      id: "13",
      name: "Camiseta",
      description: "Descrição do produto 4",
    },
    name: "Produto 4",
    description: "Descrição do produto 4",
    price: "R$400,00",
    stock: 10,
    images: [img4, img4, img4],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "90",
    category: {
      id: "1",
      name: "Camiseta",
      description: "Descrição do produto 4",
    },
    name: "Produto 4",
    description: "Descrição do produto 4",
    price: "R$400,00",
    stock: 10,
    images: [pinkCap],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "91",
    category: {
      id: "13",
      name: "Camiseta",
      description: "Descrição do produto 4",
    },
    name: "Produto 4",
    description: "Descrição do produto 4",
    price: "R$400,00",
    stock: 10,
    images: [pinkHoodie],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "92",
    category: {
      id: "13",
      name: "Camiseta",
      description: "Descrição do produto 4",
    },
    name: "Produto 4",
    description: "Descrição do produto 4",
    price: "R$400,00",
    stock: 10,
    images: [pinkPants],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "93",
    category: {
      id: "13",
      name: "Camiseta",
      description: "Descrição do produto 4",
    },
    name: "Produto 4",
    description: "Descrição do produto 4",
    price: "R$400,00",
    stock: 10,
    images: [blueCap],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "94",
    category: {
      id: "13",
      name: "Camiseta",
      description: "Descrição do produto 4",
    },
    name: "Produto 4",
    description: "Descrição do produto 4",
    price: "R$400,00",
    stock: 10,
    images: [blueHoodie],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "95",
    category: {
      id: "13",
      name: "Camiseta",
      description: "Descrição do produto 4",
    },
    name: "Produto 4",
    description: "Descrição do produto 4",
    price: "R$400,00",
    stock: 10,
    images: [bluePants],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "96",
    category: {
      id: "13",
      name: "Camiseta",
      description: "Descrição do produto 4",
    },
    name: "Produto 4",
    description: "Descrição do produto 4",
    price: "R$400,00",
    stock: 10,
    images: [shockCap],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "97",
    category: {
      id: "13",
      name: "Camiseta",
      description: "Descrição do produto 4",
    },
    name: "Produto 4",
    description: "Descrição do produto 4",
    price: "R$400,00",
    stock: 10,
    images: [shockHoodie],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "98",
    category: {
      id: "13",
      name: "Camiseta",
      description: "Descrição do produto 4",
    },
    name: "Produto 4",
    description: "Descrição do produto 4",
    price: "R$400,00",
    stock: 10,
    images: [shockPants],
    sizes: ["P", "M", "G", "GG"],
  },
];
