import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AboutUs } from "@/components/sections/about-us";
import { CustomerFavorites } from "@/components/sections/customer-favorites";
import { Hero } from "@/components/sections/hero";
import { MenuPreview } from "@/components/sections/menu-preview";
import { getLocale } from "@/i18n/get-locale";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function HomePage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return (
    <>
      <Header className="section-dark" translations={dictionary.header} />

      <main>
        <Hero translations={dictionary.hero} />
        <CustomerFavorites translations={dictionary.menu} locale={locale} />
        <MenuPreview translations={dictionary.menu} locale={locale} />
        <AboutUs translations={dictionary.aboutUs} />
      </main>

      <Footer translations={dictionary.footer} locale={locale} />
    </>
  );
}
