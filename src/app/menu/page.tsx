import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Menu } from "@/components/sections/menu";
import { TranslationWrapper } from "@/components/i18n/translation-wrapper";
import { getCurrencyForLocale } from "@/i18n/currency";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — MOKKA",
  description: "Coffee, cold drinks, breakfast and something sweet at MOKKA.",
};

export default function MenuPage() {
  return (
    <>
      <TranslationWrapper section="header">
        {({ translations }) => <Header dictionary={translations} />}
      </TranslationWrapper>

      <main className="mt-header">
        <TranslationWrapper section="menu">
          {({ translations, locale }) => (
            <Menu
              translations={translations}
              locale={locale}
              currency={getCurrencyForLocale(locale)}
            />
          )}
        </TranslationWrapper>
      </main>

      <Footer />
    </>
  );
}
