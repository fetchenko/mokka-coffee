import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Contact } from "@/components/sections/contact";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <Contact />
      </main>

      <Footer />
    </>
  );
}
