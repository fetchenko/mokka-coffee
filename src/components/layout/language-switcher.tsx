"use client";

import { useRouter } from "next/navigation";
import type { ChangeEvent } from "react";

import { setLocale } from "@/i18n/actions";
import { supportedLocales, type Locale } from "@/i18n/config";
import type { LanguageTranslation } from "@/i18n/dictionaries/en";

type LanguageSwitcherProps = {
  locale: Locale;
  language: LanguageTranslation;
};

export function LanguageSwitcher({ locale, language }: LanguageSwitcherProps) {
  const router = useRouter();

  async function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;

    await setLocale(nextLocale);
    router.refresh();
  }

  return (
    <label className="flex items-center gap-2 text-sm">
      <span>{language.label}</span>
      <select
        value={locale}
        onChange={handleChange}
        className="bg-background rounded-md border px-2 py-1"
        aria-label={language.selectAriaLabel}
      >
        {supportedLocales.map((item) => (
          <option key={item} value={item}>
            {language.names[item]}
          </option>
        ))}
      </select>
    </label>
  );
}
