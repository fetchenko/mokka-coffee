import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Contact } from "@/components/sections/contact";
import { TranslationWrapper } from "@/components/i18n/translation-wrapper";

export default function ContactPage() {
  return (
    <>
      <TranslationWrapper section="header">
        {({ translations }) => <Header dictionary={translations} />}
      </TranslationWrapper>

      <main>
        <Contact />
      </main>

      <Footer />
    </>
  );
}
