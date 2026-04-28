import { Currency } from "./Currency";

export class Money {
  private value: number;
  private currency: Currency;

  private constructor(value: number, currency: Currency) {
    this.value = value;
    this.currency = currency;
  }

  public static create(value: number, currency: Currency): Money {
    if (value < 0) throw new Error("Value must be greater than 0");
    if (!currency) throw new Error("Currency must be provided");

    return new Money(value, currency);
  }

  add(other: Money): Money {
    if (!this.currency.equals(other.currency)) {
      throw new Error("Currencies must match");
    }
    return new Money(this.value + other.value, this.currency);
  }

  subtract(other: Money): Money {
    if (!this.currency.equals(other.currency)) {
      throw new Error("Currencies must match");
    }
    if (this.value - other.value < 0) {
      throw new Error("Value must be greater than 0");
    }
    return new Money(this.value - other.value, this.currency);
  }

  multiply(factor: number): Money {
    return new Money(this.value * factor, this.currency);
  }

  divide(divisor: number): Money {
    if (divisor === 0) throw new Error("Divisor cannot be 0");
    return new Money(this.value / divisor, this.currency);
  }

  applyDiscount(percent: number): Money {
    if (percent < 0 || percent > 100) {
      throw new Error("Percent must be between 0 and 100");
    }
    const discountValue = percent / 100;
    return new Money(this.value - this.value * discountValue, this.currency);
  }

  public setValue(value: number): void {
    if (value < 0) throw new Error("Value must be greater than 0");
    this.value = value;
  }

  public getValue(): number {
    return this.value;
  }

  public getCurrency(): Currency {
    return this.currency;
  }
}
