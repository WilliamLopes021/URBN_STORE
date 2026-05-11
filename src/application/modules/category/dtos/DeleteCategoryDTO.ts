export interface DeleteCategoryInputDTO {
  id: string;
  deletedBy: string;
}

export interface DeleteCategoryOutputDTO {
  id: string;
  name: string;
  deletedBy: string;
  deletedAt: Date;
}