import type { Order } from "../entities/Order/Order";

export function GenerateReport(startDate: Date, endDate: Date, orders: Order[]) {
  const paidOrders = orders.filter((order) => order.getStatus() === "PAID");
  const paidOrderItems = paidOrders.flatMap((order) => order.getItems());


  return {
    productsMetrics: [
    ],
    period: {
      startDate,
      endDate,
    },
    totalValue: { amount: 0, currency: "BRL" },
  }
}