import type { Locale } from "@/i18n/config";
import type { Currency } from "@/lib/money";

export function getCurrencyForLocale(_locale: Locale): Currency {
  return "PLN";
}
