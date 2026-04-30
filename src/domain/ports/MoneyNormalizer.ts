import type { Currency } from "../value-objects/Currency";

export interface MoneyNormalizer {
  toMinorUnits(value: number, currency: Currency): number;
}
