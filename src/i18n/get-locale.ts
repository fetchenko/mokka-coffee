import { cookies, headers } from "next/headers";

import { defaultLocale, isLocale, type Locale } from "./config";

function localeFromLanguageTag(languageTag: string): Locale | null {
  const language = languageTag.toLowerCase().split("-")[0];

  return isLocale(language) ? language : null;
}

function getLocaleFromAcceptLanguage(
  acceptLanguage: string | null,
): Locale | null {
  const language = acceptLanguage?.split(",")[0];

  return language ? localeFromLanguageTag(language) : null;
}

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const savedLocale = cookieStore.get("locale")?.value;

  if (savedLocale && isLocale(savedLocale)) {
    return savedLocale;
  }

  const requestHeaders = await headers();

  return (
    getLocaleFromAcceptLanguage(requestHeaders.get("accept-language")) ??
    defaultLocale
  );
}
