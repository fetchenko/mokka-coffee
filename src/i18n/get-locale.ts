import { cookies, headers } from "next/headers";

import { defaultLocale, isSupportedLocale, type Locale } from "./config";

export function getLocaleFromAcceptLanguage(
  acceptLanguage: string | null,
): Locale | null {
  if (!acceptLanguage) return null;

  for (const languageRange of acceptLanguage.split(",")) {
    const language = languageRange
      .split(";")[0]
      .trim()
      .toLowerCase()
      .split("-")[0];

    return isSupportedLocale(language) ? language : null;
  }

  return null;
}

export async function getLocale(): Promise<Locale> {
  const cookieLocale = (await cookies()).get("locale")?.value;

  if (isSupportedLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = (await headers()).get("accept-language");

  return getLocaleFromAcceptLanguage(acceptLanguage) ?? defaultLocale;
}
