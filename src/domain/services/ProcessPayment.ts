import type { Order } from "../entities/Order/Order";
import { Payment } from "../entities/Payment/Payment";
import type { PaymentMethod } from "../entities/Payment/PaymentMethod";
import type { PaymentStatus } from "../entities/Payment/PaymentStatus";
import type { IdGenerator } from "@/application/interfaces/ports/IdGenerator";

export class ProcessPayment {
  private readonly idGenerator: IdGenerator;

  constructor(idGenerator: IdGenerator) {
    this.idGenerator = idGenerator;
  }

  public process(order: Order, paymentMethod: PaymentMethod): Payment {
    const payment = Payment.create({
      id: this.idGenerator.generateUuid(),
      orderId: order.getId(),
      paymentMethod,
      amount: order.getTotal(),
      status: "PENDING" as PaymentStatus,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    
    return payment;
  }
}
