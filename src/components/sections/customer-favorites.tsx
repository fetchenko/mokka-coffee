import { ProductCard } from "@/components/cards/product-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { navigation } from "@/config/navigation";
import { products } from "@/features/menu/data";
import { Product } from "@/features/menu/model";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const DISPLAY_ITEMS = 4;

export const customerFavorites: Product[] = products
  .flatMap((category) => category.items)
  .filter((product) => product.tags?.includes("favourite"))
  .slice(0, DISPLAY_ITEMS);

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
