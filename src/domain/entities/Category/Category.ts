import type { CategoryProps } from "./Category.props";
import { Name } from "../../value-objects/Name";

export class Category {
  public props: CategoryProps;

  private constructor(props: CategoryProps) {
    this.props = props;
  }

  public static create(props: CategoryProps): Category {
    return new Category(props);
  }

  public updateDetails({
    name,
    description,
  }: {
    name?: string;
    description?: string;
  }): void {
    if (name) this.props.name = Name.create(name);
    if (description !== undefined) this.props.description = description;
    this.props.updatedAt = new Date();
  }
}