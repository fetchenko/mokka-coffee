export const supportedLocales = ["en", "pl", "ru"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";

export function isSupportedLocale(
  value: string | null | undefined,
): value is Locale {
  if (!value) return false;

  return supportedLocales.includes(value as Locale);
}
