export type TranslationSchema<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? TranslationSchema<T[K]>
    : string;
};
