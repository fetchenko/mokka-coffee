import { cache } from "react";

import type { Locale } from "./config";
import { dictionary as en } from "./dictionaries/en";
import { dictionary as pl } from "./dictionaries/pl";
import { dictionary as ru } from "./dictionaries/ru";

export type TranslationSchema<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? TranslationSchema<T[K]>
    : string;
};

export type Dictionary = TranslationSchema<typeof en>;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  pl,
  ru,
};

export const getDictionary = cache((locale: Locale): Dictionary => {
  return dictionaries[locale];
});
