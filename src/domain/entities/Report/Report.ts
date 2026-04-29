import type { ReportProps } from "./Report.props";

export class Report {
  public props: ReportProps;

  private constructor(props: ReportProps) {
    this.props = props;
  }

  public static create(props: ReportProps): Report {
    return new Report(props);
  }
}