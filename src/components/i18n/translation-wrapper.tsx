import type { ReactNode } from "react";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";

type TranslationWrapperProps<K extends keyof Dictionary> = {
  section: K;
  children: (props: {
    locale: Locale;
    translations: Dictionary[K];
  }) => ReactNode;
};

export async function TranslationWrapper<K extends keyof Dictionary>({
  section,
  children,
}: TranslationWrapperProps<K>) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return children({
    locale,
    translations: dictionary[section],
  });
}
