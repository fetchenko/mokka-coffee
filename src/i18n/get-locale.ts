import { cookies, headers } from "next/headers";

import { defaultLocale, isLocale, type Locale } from "./config";

function localeFromLanguageTag(languageTag: string): Locale | null {
  const language = languageTag.trim().toLowerCase().split("-")[0];

  return isLocale(language) ? language : null;
}

function getLocaleFromAcceptLanguage(
  acceptLanguage: string | null,
): Locale | null {
  if (!acceptLanguage) {
    return null;
  }

  for (const languageRange of acceptLanguage.split(",")) {
    const language = languageRange.split(";")[0];
    const locale = localeFromLanguageTag(language);

    if (locale) {
      return locale;
    }
  }

  return null;
}

export function resolveLocale(
  savedLocale: string | undefined,
  acceptLanguage: string | null,
): Locale {
  if (savedLocale && isLocale(savedLocale)) {
    return savedLocale;
  }

  return (
    getLocaleFromAcceptLanguage(acceptLanguage) ??
    defaultLocale
  );
}

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const requestHeaders = await headers();

  return resolveLocale(
    cookieStore.get("locale")?.value,
    requestHeaders.get("accept-language"),
  );
}
