export interface EditCategoryInputDTO {
  id: string;
  name?: string;
  description?: string;
  productsIds?: string[];
}

export interface EditCategoryOutputDTO {
  id: string;
  name: string;
  description: string;
  updatedAt: Date;
}