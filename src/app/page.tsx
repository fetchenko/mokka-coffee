import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TranslationWrapper } from "@/components/i18n/translation-wrapper";
import { AboutUs } from "@/components/sections/about-us";
import { CustomerFavorites } from "@/components/sections/customer-favorites";
import { Hero } from "@/components/sections/hero";
import { MenuPreview } from "@/components/sections/menu-preview";
import { Testimonialls } from "@/components/sections/testimonialls";
import { VisitUs } from "@/components/sections/visit-us";

export default function HomePage() {
  return (
    <>
      <TranslationWrapper>
        {({ dictionary }) => (
          <Header className="section-dark" dictionary={dictionary.header} />
        )}
      </TranslationWrapper>

      <main>
        <Hero />
        <CustomerFavorites />
        <AboutUs />
        <MenuPreview />
        <Testimonialls />
        <VisitUs />
      </main>

      <Footer />
    </>
  );
}
