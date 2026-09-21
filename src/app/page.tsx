import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AboutUs } from "@/components/sections/about-us";
import { CustomerFavorites } from "@/components/sections/customer-favorites";
import { Hero } from "@/components/sections/hero";

export default function HomePage() {
  return (
    <>
      <Header className="section-dark" />

      <main>
        <Hero />
        <CustomerFavorites />
        <AboutUs />
        {/* <MenuPreview />
        <Testimonialls />
        <VisitUs /> */}
      </main>

      <Footer />
    </>
  );
}
