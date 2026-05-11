import type { Payment } from "@/domain/entities/Payment/Payment";
import type { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { PaymentStatus } from "@/domain/entities/Payment/PaymentStatus";

export interface PaymentApiPort {
  create(payment: Payment): Promise<Payment>;
  updateStatus(id: UniqueEntityId, status: PaymentStatus): Promise<void>;
  findById(id: UniqueEntityId): Promise<Payment>;
  findByOrderId(orderId: UniqueEntityId): Promise<Payment[]>;
  findAll(): Promise<Payment[]>;
}
