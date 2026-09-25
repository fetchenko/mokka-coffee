import { headers } from "next/headers";

import { defaultLocale, isLocale, type Locale } from "./config";

function localeFromLanguageTag(languageTag: string): Locale | null {
  const language = languageTag.toLowerCase().split("-")[0];

  return isLocale(language) ? language : null;
}

function getLocaleFromAcceptLanguage(
  acceptLanguage: string | null,
): Locale | null {
  if (!acceptLanguage) {
    return null;
  }

  const languages = acceptLanguage
    .split(",")
    .map((part, index) => {
      const [languageTag, ...parameters] = part.trim().split(";");
      const qualityParameter = parameters.find((parameter) =>
        parameter.trim().startsWith("q="),
      );
      const quality = qualityParameter
        ? Number.parseFloat(qualityParameter.trim().slice(2))
        : 1;

      return {
        languageTag,
        quality: Number.isNaN(quality) ? 0 : quality,
        index,
      };
    })
    .filter(({ quality }) => quality > 0)
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  for (const { languageTag } of languages) {
    const locale = localeFromLanguageTag(languageTag);

    if (locale) {
      return locale;
    }
  }

  return null;
}

export async function getLocale(): Promise<Locale> {
  const requestHeaders = await headers();

  return (
    getLocaleFromAcceptLanguage(requestHeaders.get("accept-language")) ??
    defaultLocale
  );
}
