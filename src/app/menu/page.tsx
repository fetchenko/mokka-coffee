import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Menu } from "@/components/sections/menu";
import { Logo } from "@/components/ui/logo";
import { getLocale } from "@/i18n/get-locale";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Menu — MOKKA",
  description: "Coffee, cold drinks, breakfast and something sweet at MOKKA.",
};

export default async function MenuPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return (
    <>
      <Header
        translations={dictionary.header}
        logo={<Logo translations={dictionary.logo} />}
      />

      <main className="mt-header">
        <Menu translations={dictionary.menu} locale={locale} />
      </main>

      <Footer
        translations={dictionary.footer}
        languageTranslations={dictionary.language}
        logoTranslations={dictionary.logo}
        locale={locale}
      />
    </>
  );
}
