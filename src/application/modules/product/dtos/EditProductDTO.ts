export interface EditProductInputDTO {
  id: string;
  [key: string]: unknown;
}

export interface EditProductOutputDTO {
  id: string;
  updatedAt: Date;
  updatedBy: string;
}
