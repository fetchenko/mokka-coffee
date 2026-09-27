import { TranslationWrapper } from "@/components/i18n/translation-wrapper";

export function Logo() {
  return (
    <TranslationWrapper section="logo">
      {({ translations }) => (
        <span>
          <span className="block font-sans text-2xl leading-none tracking-[0.12em]">
            MOKKA
          </span>
          <span className="text-muted-foreground mt-1 block text-[0.5rem] tracking-[0.2em] uppercase">
            {translations.subtitle}
          </span>
        </span>
      )}
    </TranslationWrapper>
  );
}
