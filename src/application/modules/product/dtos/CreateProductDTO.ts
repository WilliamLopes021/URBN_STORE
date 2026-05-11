export interface CreateProductInputDTO {
  name: string;
  description: string;
  price: number;
  categoryId: string;
  stock: number;
  images: string[];
}