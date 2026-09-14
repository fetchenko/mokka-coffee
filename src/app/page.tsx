import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Section } from "@/components/layout/section";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Section tone="dark">
          <Hero />
        </Section>
        <section>{/* Customer favorites */}</section>
        <section id="about">{/* About */}</section>
        <section>{/* Menu preview */}</section>
        <section>{/* Testimonials */}</section>
        <section id="visit-us">{/* Visit Us */}</section>
      </main>

      <Footer />
    </>
  );
}
