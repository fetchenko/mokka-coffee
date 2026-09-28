import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Contact } from "@/components/sections/contact";
import { getLocale } from "@/i18n/get-locale";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function ContactPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return (
    <>
      <Header translations={dictionary.header} />

      <main>
        <Contact translations={dictionary.visitUs} />
      </main>

      <Footer translations={dictionary.footer} locale={locale} />
    </>
  );
}
