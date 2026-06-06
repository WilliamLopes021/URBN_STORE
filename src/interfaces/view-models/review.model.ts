export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  max?: number;
  body: string;
  createdAt: string;
  verified?: boolean;
}
