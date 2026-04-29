import type { Money } from "../../value-objects/Money";
import type { UniqueEntityId } from "../../value-objects/UniqueEntityId";
import type { ProductMetrics } from "./ProductsMetrics";

export interface ReportProps {
  id: UniqueEntityId;
  title: string;
  description: string;
  productsMetrics: ProductMetrics[];
  period: {
    startDate: Date;
    endDate: Date;
  }
  totalValue: Money;
  createdAt: Date;
  updatedAt: Date;
}