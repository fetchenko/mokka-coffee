import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";

import { dictionary as en } from "./dictionaries/en";
import { dictionary as pl } from "./dictionaries/pl";
import { dictionary as ru } from "./dictionaries/ru";
import { cache } from "react";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  pl,
  ru,
};

export const getDictionary = cache((locale: Locale): Dictionary => {
  return dictionaries[locale];
});
