import img from "@/assets/products/urbn_product_hoodie_black.png";

export const order = [
  {
    id: "1",
    date: new Date(),
    status: "PENDING",
    total: "10",
    products: [
      {
        id: "1",
        category: {
          id: "1",
          name: "Category 1",
          description: "Category 1",
          image: "https://example.com/image.jpg",
        },
        name: "Product 1",
        price: 10,
        description: "Product 1",
        stock: 10,
        sizes: ["S", "M", "L"],
        images: [img],
      },
    ],
  },
  {
    id: "2",
    date: new Date(),
    status: "DELIVERED",
    total: "50",
    products: [
      {
        id: "1",
        category: {
          id: "1",
          name: "Category 1",
          description: "Category 1",
        },
        name: "Product 1",
        price: "10",
        description: "Product 1",
        stock: 10,
        sizes: ["S", "M", "L"],
        images: [img],
      },
      {
        id: "2",
        category: {
          id: "1",
          name: "Category 1",
          description: "Category 1",
        },
        name: "Product 1",
        price: "10",
        description: "Product 1",
        stock: 10,
        sizes: ["S", "M", "L"],
        images: [img],
      },
    ],
  },
];
