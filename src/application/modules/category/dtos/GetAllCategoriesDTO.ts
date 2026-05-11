import type { Category } from "@/domain/entities/Category/Category";

export interface GetAllCategoriesOutputDTO {
  categories: Category[];
}
