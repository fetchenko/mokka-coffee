import type { ReactNode } from "react";

import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";

type TranslationWrapperProps = {
  children: (props: {
    locale: Awaited<ReturnType<typeof getLocale>>;
    dictionary: ReturnType<typeof getDictionary>;
  }) => ReactNode;
};

export async function TranslationWrapper({
  children,
}: TranslationWrapperProps) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return children({ locale, dictionary });
}
