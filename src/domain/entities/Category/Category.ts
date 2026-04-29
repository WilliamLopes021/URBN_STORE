import type { CategoryProps } from "./Category.props";

export class Category {
  public props: CategoryProps;

  private constructor(props: CategoryProps) {
    this.props = props;
  }

  public static create(props: CategoryProps): Category {
    return new Category(props);
  }
}