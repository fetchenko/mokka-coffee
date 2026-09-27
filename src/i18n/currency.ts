import type { Locale } from "@/i18n/config";
import type { Currency } from "@/lib/money";

const currencyByLocale: Record<Locale, Currency> = {
  en: "USD",
  pl: "PLN",
  ru: "BYN",
};

export function getCurrencyForLocale(locale: Locale): Currency {
  return currencyByLocale[locale];
}
