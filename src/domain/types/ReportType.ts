import type { ProductMetrics } from "./ProductsMetrics";
import type { Money } from "../value-objects/Money";

export interface ReportType {
  productsMetrics: ProductMetrics[];
  period: {
    startDate: Date;
    endDate: Date;
  };
  totalValue: Money;
}
