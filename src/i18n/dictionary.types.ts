import { dictionary as en } from "./dictionaries/en";

export type TranslationSchema<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? TranslationSchema<T[K]>
    : string;
};

export type Dictionary = TranslationSchema<typeof en>;

export type ProductTranslation =
  Dictionary["menu"]["products"][keyof Dictionary["menu"]["products"]];
