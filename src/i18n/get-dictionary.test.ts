import { describe, expect, expectTypeOf, it } from "vitest";

import { dictionary as en } from "./dictionaries/en";
import { dictionary as pl } from "./dictionaries/pl";
import { dictionary as ru } from "./dictionaries/ru";
import { getDictionary } from "./get-dictionary";
import { Dictionary, TranslationSchema } from "@/i18n/dictionary.types";

describe("TranslationSchema", () => {
  it("turns translation leaves into strings while preserving the dictionary shape", () => {
    type Example = TranslationSchema<{
      title: "Hello";
      navigation: {
        home: "Home";
        menu: "Menu";
      };
    }>;

    expectTypeOf<Example>().toEqualTypeOf<{
      title: string;
      navigation: {
        home: string;
        menu: string;
      };
    }>();
  });

  it("uses the English dictionary as the translation schema", () => {
    expectTypeOf<Dictionary>().toEqualTypeOf<TranslationSchema<typeof en>>();
    expectTypeOf<Dictionary["logo"]["subtitle"]>().toEqualTypeOf<string>();
    expectTypeOf<
      Dictionary["header"]["navigationItems"]["home"]
    >().toEqualTypeOf<string>();
    expectTypeOf<
      Dictionary["menu"]["products"]["espresso"]["name"]
    >().toEqualTypeOf<string>();
  });

  it("accepts translated dictionaries", () => {
    expectTypeOf(pl).toMatchTypeOf<Dictionary>();
    expectTypeOf(ru).toMatchTypeOf<Dictionary>();
  });
});

describe("getDictionary", () => {
  it.each([
    ["en", en],
    ["pl", pl],
    ["ru", ru],
  ] as const)("returns the dictionary for %s", (locale, dictionary) => {
    expect(getDictionary(locale)).toBe(dictionary);
  });
});
