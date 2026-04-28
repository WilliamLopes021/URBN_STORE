export class Currency {
  private value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): Currency {
    if (value.length !== 3) throw new Error("Invalid currency");
    return new Currency(value.toUpperCase());
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: Currency): boolean {
    return this.value === other.value;
  }
}