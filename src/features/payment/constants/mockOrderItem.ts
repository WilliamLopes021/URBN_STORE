import type { OrderItemViewModel } from "@/interfaces/view-models/orderitem.viewmodel";
import img1 from "@/assets/models/hero_image.png";
import img2 from "@/assets/models/urbn_model_male_2.png";
import img3 from "@/assets/models/urbn_model_male_1.png";
import img4 from "@/assets/models/urbn_model_female_2.png";
import img5 from "@/assets/models/image.png";

export const orderItem: OrderItemViewModel[] = [
  {
    id: "1",
    quantity: 1,
    unitPrice: "1",
    size: "xl",
    product: {
      id: "1",
      category: {
        id: "1",
        name: "Category 1",
        description: "",
      },
      name: "Product 1",
      description: "Description 1",
      price: "100.00",
      stock: "Esgotado",
      images: [
        "https://imgs.search.brave.com/kcqfwxS2owixKi4w6VPiM20-TIlDh2F8FW2i6ztZet8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1hp/WDJ3U2hwZjZYWTJr/V2k3cGtNczcuanBn",
      ],
      sizes: ["P", "M", "G"],
    },
  },
  {
    id: "2",
    quantity: 1,
    unitPrice: "1",
    size: "xl",
    product: {
      id: "2",
      category: {
        id: "1",
        name: "Category 1",
        description: "",
      },
      name: "Product 2",
      description: "Description 1",
      price: "1",
      stock: "Esgotado",
      images: [img1],
      sizes: ["P", "M", "G"],
    },
  },
  {
    id: "3",
    quantity: 1,
    unitPrice: "1",
    size: "xl",
    product: {
      id: "3",
      category: {
        id: "1",
        name: "Category 1",
        description: "",
      },
      name: "Product 3",
      description: "Description 1",
      price: "1",
      stock: "Esgotado",
      images: [img2],
      sizes: ["P", "M", "G"],
    },
  },
  {
    id: "4",
    quantity: 1,
    unitPrice: "1",
    size: "xl",
    product: {
      id: "4",
      category: {
        id: "1",
        name: "Category 1",
        description: "",
      },
      name: "Product 4",
      description: "Description 1",
      price: "1",
      stock: "Esgotado",
      images: [img3],
      sizes: ["P", "M", "G"],
    },
  },
  {
    id: "5",
    quantity: 1,
    unitPrice: "1",
    size: "xl",
    product: {
      id: "5",
      category: {
        id: "1",
        name: "Category 1",
        description: "",
      },
      name: "Product 5",
      description: "Description 1",
      price: "1",
      stock: "Esgotado",
      images: [img4],
      sizes: ["P", "M", "G"],
    },
  },
  {
    id: "6",
    quantity: 1,
    unitPrice: "1",
    size: "xl",
    product: {
      id: "6",
      category: {
        id: "1",
        name: "Category 1",
        description: "",
      },
      name: "Product 6",
      description: "Description 1",
      price: "1",
      stock: "Esgotado",
      images: [img5],
      sizes: ["P", "M", "G"],
    },
  },
  {
    id: "7",
    quantity: 1,
    unitPrice: "1",
    size: "xl",
    product: {
      id: "7",
      category: {
        id: "1",
        name: "Category 1",
        description: "",
      },
      name: "Product 7",
      description: "Description 1",
      price: "1",
      stock: "Esgotado",
      images: [
        "https://imgs.search.brave.com/kcqfwxS2owixKi4w6VPiM20-TIlDh2F8FW2i6ztZet8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1hp/WDJ3U2hwZjZYWTJr/V2k3cGtNczcuanBn",
      ],
      sizes: ["P", "M", "G"],
    },
  },
  {
    id: "8",
    quantity: 9,
    unitPrice: "1",
    size: "xl",
    product: {
      id: "8",
      category: {
        id: "1",
        name: "Category 1",
        description: "",
      },
      name: "Product 8",
      description: "Description 1",
      price: "1",
      stock: "Esgotado",
      images: [
        "https://imgs.search.brave.com/kcqfwxS2owixKi4w6VPiM20-TIlDh2F8FW2i6ztZet8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1hp/WDJ3U2hwZjZYWTJr/V2k3cGtNczcuanBn",
      ],
      sizes: ["P", "M", "G"],
    },
  },
];
