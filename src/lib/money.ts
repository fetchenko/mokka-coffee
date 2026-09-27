export const CURRENCIES = ["PLN", "EUR", "USD", "BYN"] as const;

export type Currency = (typeof CURRENCIES)[number];

export function formatPrice(
  amount: number,
  currency: Currency,
  locale: string,
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount / 100);
}
