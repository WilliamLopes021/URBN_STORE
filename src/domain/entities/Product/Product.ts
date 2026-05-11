import type { Money } from "../../value-objects/Money";
import { Name } from "../../value-objects/Name";
import type { ProductProps } from "./Product.props";
import type { UniqueEntityId } from "../../value-objects/UniqueEntityId";
import { BusinessRuleError } from "../../errors/BusinessRuleError";

export class Product {
  private props: ProductProps;

  private constructor(props: ProductProps) {
    this.props = props;
  }

  public static create(props: ProductProps): Product {
    return new Product(props);
  }

  public getDisplayInfo(): Omit<
    ProductProps,
    "createdAt" | "updatedAt" | "stock"
  > {
    return {
      id: this.props.id,
      name: this.props.name,
      description: this.props.description,
      price: this.props.price,
      categoryId: this.props.categoryId,
      images: this.props.images,
    };
  }

  public updateName(name: string): void {
    this.props.name = Name.create(name);
  }

  public updateDescription(description: string): void {
    this.props.description = description;
  }

  public updatePrice(price: Money): void {
    this.props.price = price;
  }

  public updateCategory(categoryId: UniqueEntityId): void {
    this.props.categoryId = categoryId;
  }

  public getStock(): number {
    return this.props.stock;
  }

  public addStock(quantity: number): void {
    this.props.stock += quantity;
  }

  public removeStock(quantity: number): void {
    if (this.props.stock < quantity) throw new BusinessRuleError("Estoque insuficiente");
    this.props.stock -= quantity;
  }

  public updateImages(images: string[]): void {
    this.props.images = images;
  }

  public getTimeStamps(): { createdAt: Date; updatedAt: Date } {
    return {
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
    };
  }

  public getPrice(): Money {
    return this.props.price;
  }

  public getId(): UniqueEntityId {
    return this.props.id;
  }

  public getCategoryId(): UniqueEntityId {
    return this.props.categoryId;
  }
}
