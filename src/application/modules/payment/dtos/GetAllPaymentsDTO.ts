import type { Payment } from "@/domain/entities/Payment/Payment";

export interface GetAllPaymentsOutputDTO {
  payments: Payment[];
}
