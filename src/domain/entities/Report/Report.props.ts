import type { Money } from "../../value-objects/Money";
import type { UniqueEntityId } from "../../value-objects/UniqueEntityId";

export interface ReportProps {
  id: UniqueEntityId;
  title: string;
  description: string;
  productsMetrics: {
    productId: UniqueEntityId;
    name: string;
    sold: number;
  }[];
  totalValue: Money;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}