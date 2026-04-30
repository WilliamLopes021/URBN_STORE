import type { MoneyNormalizer } from "../ports/MoneyNormalizer";
import type { Currency } from "../value-objects/Currency";
import { Money } from "../value-objects/Money";

export class MoneyFactory {
  private normalizer: MoneyNormalizer;

  constructor(normalizer: MoneyNormalizer) {
    this.normalizer = normalizer;
  }

  create(value: number, currency: Currency): Money {
    const minorUnits = this.normalizer.toMinorUnits(value, currency);
    return Money.create(minorUnits, currency);
  }
}
