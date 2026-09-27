import { cache } from "react";

import { Dictionary } from "@/i18n/dictionary.types";
import { Locale } from "@/i18n/config";

import { dictionary as en } from "@/i18n/dictionaries/en";
import { dictionary as pl } from "@/i18n/dictionaries/pl";
import { dictionary as ru } from "@/i18n/dictionaries/ru";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  pl,
  ru,
};

export const getDictionary = cache((locale: Locale): Dictionary => {
  return dictionaries[locale];
});
