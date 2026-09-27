import type { Dictionary } from "@/i18n/dictionary.types";

type LogoProps = {
  translations: Dictionary["logo"];
};

export function Logo({ translations }: LogoProps) {
  return (
    <span>
      <span className="block font-sans text-2xl leading-none tracking-[0.12em]">
        MOKKA
      </span>
      <span className="text-muted-foreground mt-1 block text-[0.5rem] tracking-[0.2em] uppercase">
        {translations.subtitle}
      </span>
    </span>
  );
}
