export const CURRENCIES = ["PLN", "EUR", "USD", "BYN"] as const;

export type Currency = (typeof CURRENCIES)[number];

export type Money = {
  /**
   * Amount in minor currency units.
   * 900 PLN = 9.00 PLN
   * 750 EUR = 7.50 EUR
   */
  amount: number;
  currency: Currency;
};

export function formatPrice(price: Money, locale = "pl-PL"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: price.currency,
  }).format(price.amount / 100);
}
