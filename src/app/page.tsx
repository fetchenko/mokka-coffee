import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CustomerFavorites } from "@/components/sections/customer-favorites";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <CustomerFavorites />
        <section id="about">{/* About */}</section>
        <section>{/* Menu preview */}</section>
        <section>{/* Testimonials */}</section>
        <section id="visit-us">{/* Visit Us */}</section>
      </main>

      <Footer />
    </>
  );
}
