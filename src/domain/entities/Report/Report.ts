import type { Money } from "../../value-objects/Money";
import type { ProductMetrics } from "./ProductsMetrics";
import type { ReportProps } from "./Report.props";

export class Report {
  public props: ReportProps;

  private constructor(props: ReportProps) {
    this.props = props;
  }

  public static create(props: ReportProps): Report {
    return new Report(props);
  }

  setProductsMetrics(newData: ProductMetrics): void {
    this.props.productsMetrics.push(newData);
    this.props.totalValue.add(newData.total);
  }

  public getTitle(): string {
    return this.props.title;
  }

  public getDescription(): string {
    return this.props.description;
  }

  public getProductsMetrics(): ProductMetrics[] {
    return this.props.productsMetrics;
  }

  public getTotalValue(): Money {
    return this.props.totalValue;
  }

  public getPeriod(): {
    startDate: Date;
    endDate: Date;
  } {
    return this.props.period;
  }
}
