import type { Currency } from "../value-objects/Currency";
import type { Money } from "../value-objects/Money";

export interface CurrencyConverter {
  convert(value: Money, targetCurrency: Currency): Money;
}