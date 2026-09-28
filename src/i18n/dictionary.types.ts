import { dictionary as en, language } from "./dictionaries/en";

export type TranslationSchema<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? TranslationSchema<T[K]>
    : string;
};

export type Dictionary = TranslationSchema<typeof en>;

export type LanguageTranslation = TranslationSchema<typeof language>;

export type ProductTranslation =
  Dictionary["menu"]["products"][keyof Dictionary["menu"]["products"]];
