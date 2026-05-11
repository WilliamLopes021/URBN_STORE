export interface DeleteProductInputDTO {
  id: string;
}

export interface DeleteProductOutputDTO {
  id: string;
  deletedBy: string;
  deletedAt: Date;
}
