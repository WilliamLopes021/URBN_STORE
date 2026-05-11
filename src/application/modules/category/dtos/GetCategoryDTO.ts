import type { Category } from "@/domain/entities/Category/Category";

export interface GetCategoryInputDTO {
  id: string;
}

export interface GetCategoryOutputDTO {
  category: Category;
}
