import type { Order } from "../entities/Order/Order";
import type { ReportType } from "../types/ReportType";
import type { ProductMetrics } from "../types/ProductsMetrics";
import type { CurrencyConverter } from "../ports/CurrencyConverter";
import { Money } from "../value-objects/Money";
import type { Currency } from "../value-objects/Currency";

export class ReportService {
  private currencyConverter: CurrencyConverter;

  constructor(currencyConverter: CurrencyConverter) {
    this.currencyConverter = currencyConverter;
  }

  private getProductsMetrics(
    paidOrders: Order[],
    targetCurrency: Currency,
  ): ProductMetrics[] {
    return paidOrders.flatMap((order) => {
      const items = order.getItems();
      return items.map((item) => {
        const newTotal = this.currencyConverter.convert(
          item.getSubtotal(),
          targetCurrency,
        );
        return {
          productId: item.getProductId(),
          sold: item.getQuantity(),
          total: newTotal,
          soldDate: order.getPaidAt(),
        };
      });
    });
  }

  private getTotalValue(productsMetrics: ProductMetrics[]): Money {
    if (productsMetrics.length === 0) {
      throw new Error("Cannot calculate total from empty metrics");
    }

    return productsMetrics.reduce((acc, item) => {
      return acc.add(item.total);
    }, productsMetrics[0].total);
  }

  generateReport(
    startDate: Date,
    endDate: Date,
    orders: Order[],
    currency: Currency,
  ): ReportType {
    const paidOrders = orders.filter((order) => {
      if (!order.getPaidAt()) return false;

      const time = order.getPaidAt().getTime();
      return time >= startDate.getTime() && time <= endDate.getTime();
    });

    const productsMetrics = this.getProductsMetrics(paidOrders, currency);
    const totalValue = this.getTotalValue(productsMetrics);

    return {
      productsMetrics,
      period: {
        startDate,
        endDate,
      },
      totalValue,
    };
  }
}
