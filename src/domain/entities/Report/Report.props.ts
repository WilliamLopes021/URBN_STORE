import type { Money } from "../../value-objects/Money";
import type { ProductMetrics } from "./ProductsMetrics";

export interface ReportProps {
  productsMetrics: ProductMetrics[];
  period: {
    startDate: Date;
    endDate: Date;
  }
  totalValue: Money;
}