import type { MoneyNormalizer } from "@/domain/ports/MoneyNormalizer";
import type { Currency } from "@/domain/value-objects/Currency";
import cc from "currency-codes";

export class CurrencyAndMoneyNormalizer implements MoneyNormalizer {
  toMinorUnits(value: number, currency: Currency): number {
    const currencyCode = cc.code(currency.getValue());

    if (!currencyCode) throw new Error("Invalid currency");
    const valueMinorUnits = value * 10 ** currencyCode.digits;

    return valueMinorUnits;
  }
}
