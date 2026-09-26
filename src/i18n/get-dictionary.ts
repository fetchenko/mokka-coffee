import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";

import { dictionary as en } from "./dictionaries/en";
import { dictionary as pl } from "./dictionaries/pl";
import { dictionary as ru } from "./dictionaries/ru";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  pl,
  ru,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
