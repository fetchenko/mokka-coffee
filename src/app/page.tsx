import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section>{/* Hero */}</section>
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
