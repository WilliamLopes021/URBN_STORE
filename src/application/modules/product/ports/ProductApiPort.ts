import type { Product } from "@/domain/entities/Product/Product";
import type { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { EditProductInputDTO } from "../dtos/EditProductDTO";

export interface ProductApiPort {
  create(product: Product): Promise<Product>;
  update(id: UniqueEntityId, product: EditProductInputDTO): Promise<void>;
  delete(id: UniqueEntityId): Promise<void>;
  findAll(): Promise<Product[]>;
  findById(id: UniqueEntityId): Promise<Product>;
}
