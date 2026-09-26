import { cookies, headers } from "next/headers";

import { defaultLocale, isLocale, type Locale } from "./config";

function localeFromLanguageTag(languageTag: string): Locale | null {
  const language = languageTag.trim().toLowerCase().split("-")[0];

  return isLocale(language) ? language : null;
}

export async function getLocale(): Promise<Locale> {
  const cookieLocale = (await cookies()).get("locale")?.value;

  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const browserLocale = (await headers())
    .get("accept-language")
    ?.split(",")[0];

  return (
    (browserLocale && localeFromLanguageTag(browserLocale)) ??
    defaultLocale
  );
}
