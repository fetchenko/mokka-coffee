import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Menu } from "@/components/sections/menu";
import { TranslationWrapper } from "@/components/i18n/translation-wrapper";
import { Metadata } from "next";
import { Logo } from "@/components/ui/logo";

export const metadata: Metadata = {
  title: "Menu — MOKKA",
  description: "Coffee, cold drinks, breakfast and something sweet at MOKKA.",
};

export default function MenuPage() {
  return (
    <>
      <TranslationWrapper section="header">
        {({ translations }) => (
          <Header dictionary={translations} logo={<Logo />} />
        )}
      </TranslationWrapper>

      <main className="mt-header">
        <TranslationWrapper section="menu">
          {({ translations, locale }) => (
            <Menu translations={translations} locale={locale} />
          )}
        </TranslationWrapper>
      </main>

      <Footer />
    </>
  );
}
