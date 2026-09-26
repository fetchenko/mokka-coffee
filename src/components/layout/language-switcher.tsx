"use client";

import { useRouter } from "next/navigation";
import type { ChangeEvent } from "react";

import { setLocale } from "@/i18n/actions";
import { supportedLocales, type Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
};

const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  pl: "Polski",
  ru: "Русский",
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter();

  async function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;

    await setLocale(nextLocale);
    router.refresh();
  }

  return (
    <label className="flex items-center gap-2 text-sm">
      <span>Language</span>
      <select
        value={locale}
        onChange={handleChange}
        className="rounded-md border bg-background px-2 py-1"
        aria-label="Select language"
      >
        {supportedLocales.map((item) => (
          <option key={item} value={item}>
            {LOCALE_LABELS[item]}
          </option>
        ))}
      </select>
    </label>
  );
}
