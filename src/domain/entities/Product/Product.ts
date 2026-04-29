import type { Category } from "../Category/Category";
import type { Money } from "../../value-objects/Money";
import { Name } from "../../value-objects/Name";
import type { ProductProps } from "./Product.props";

export class Product {
  private readonly props: ProductProps;

  private constructor(props: ProductProps) {
    this.props = props;
  }

  public static create(props: ProductProps): Product {
    return new Product(props);
  }

  public getDisplayInfo(): Omit<ProductProps, "createdAt" | "updatedAt" | "stock"> {
    return {
      id: this.props.id,
      name: this.props.name,
      description: this.props.description,
      price: this.props.price,
      category: this.props.category,
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

  public updateCategory(category: Category): void {
    this.props.category = category;
  }

  public getStock(): number {
    return this.props.stock;
  }

  public addStock(quantity: number): void {
    this.props.stock += quantity;
  }

  public removeStock(quantity: number): void {
    if (this.props.stock < quantity) throw new Error("Estoque insuficiente");
    this.props.stock -= quantity;
  }

  public updateImages(images: string[]): void {
    this.props.images = images;
  }

  public getTimeStamps(): { createdAt: Date, updatedAt: Date } {
    return {
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
    }
  }
}
