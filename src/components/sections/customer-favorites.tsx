import { ProductCard } from "@/components/cards/product-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { navigation } from "@/config/navigation";
import { Product } from "@/features/menu/model";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const customerFavorites: Product[] = [
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Rich espresso with velvety steamed milk.",
    price: { amount: 1200, currency: "PLN" },
    image: "/assets/coffee-cappuccino.webp",
  },
  {
    id: "vanilla-latte",
    name: "Vanilla Latte",
    description: "Espresso, steamed milk, and vanilla.",
    price: { amount: 1300, currency: "PLN" },
    image: "/assets/coffee-vanilla-latte.webp",
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    description: "Smooth, slow-steeped coffee served over ice.",
    price: { amount: 1400, currency: "PLN" },
    image: "/assets/coffee-cold-brew.webp",
  },
  {
    id: "coffee-latte",
    name: "Coffee Latte",
    description: "Smooth, slow-steeped coffee served over ice.",
    price: { amount: 1200, currency: "PLN" },
    image: "/assets/coffee-latte.webp",
  },
];

export function CustomerFavorites() {
  return (
    <Section>
      <Container className="mx-auto grid max-w-5xl gap-y-5 md:grid-cols-[1fr_auto]">
        <div className="flex justify-between">
          <div>
            <Heading variant="eyebrow">Our favorites</Heading>
            <Heading variant="section">Customer favorites</Heading>
          </div>
        </div>

        <ul className="grid gap-4 md:col-span-2 md:grid-cols-2 lg:grid-cols-4">
          {customerFavorites.map((product) => (
            <li key={product.name}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>

        <Button className="md:col-start-2 md:row-start-1 md:self-end" variant="link" asChild>
          <Link href={navigation.menu}>
            View full menu
            <ArrowRight />
          </Link>
        </Button>
      </Container>
    </Section>
  );
}
