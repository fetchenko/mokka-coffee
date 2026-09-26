"use client";

import { useRouter } from "next/navigation";
import type { ChangeEvent } from "react";

import { setLocale } from "@/i18n/actions";
import { supportedLocales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

type LanguageSwitcherProps = {
  locale: Locale;
  dictionary: Dictionary["language"];
};

export function LanguageSwitcher({ locale, dictionary }: LanguageSwitcherProps) {
  const router = useRouter();

  async function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;

    await setLocale(nextLocale);
    router.refresh();
  }

  return (
    <label className="flex items-center gap-2 text-sm">
      <span>{dictionary.label}</span>
      <select
        value={locale}
        onChange={handleChange}
        className="rounded-md border bg-background px-2 py-1"
        aria-label={dictionary.selectAriaLabel}
      >
        {supportedLocales.map((item) => (
          <option key={item} value={item}>
            {dictionary.names[item]}
          </option>
        ))}
      </select>
    </label>
  );
}
