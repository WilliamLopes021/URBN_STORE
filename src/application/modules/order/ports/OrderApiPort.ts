import type { Order } from "@/domain/entities/Order/Order";
import type { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { EditOrderStatusInputDTO } from "../dtos/EditOrderStatusDTO";

export interface OrderApiPort {
  create(order: Order): Promise<Order>;
  updateOrder(id: UniqueEntityId, newOrder: EditOrderStatusInputDTO): Promise<void>;
  cancel(id: UniqueEntityId): Promise<void>;
  findById(id: UniqueEntityId): Promise<Order>;
  findByUserId(userId: UniqueEntityId): Promise<Order[]>;
}
