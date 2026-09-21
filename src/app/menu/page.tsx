import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Menu } from "@/components/sections/menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — MOKKA",
  description: "Coffee, cold drinks, breakfast and something sweet at MOKKA.",
};

export default function MenuPage() {
  return (
    <>
      <Header />

      <main className="mt-header">
        <Menu />
      </main>

      <Footer />
    </>
  );
}
