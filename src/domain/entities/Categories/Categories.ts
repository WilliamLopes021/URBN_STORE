import { Name } from "../../value-objects/Name";
import type { CategoriesProps } from "./Categories.props";

export class Categories {
  private readonly props: CategoriesProps;

  private constructor(props: CategoriesProps) {
    this.props = props;
  }

  public static create(props: CategoriesProps): Categories {
    return new Categories(props);
  }

  public getName(): Name {
    return this.props.name;
  }

  public getDescription(): string {
    return this.props.description;
  }

  public updateName(name: string): void {
    const newName = Name.create(name);
    this.props.name = newName;
  }

  public updateDescription(description: string): void {
    this.props.description = description;
  }

  public updateUpdatedAt(updatedAt: Date): void {
    this.props.updatedAt = updatedAt;
  }
}