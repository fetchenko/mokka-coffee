import { ProductCard } from "@/components/blocks/product-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { navigation } from "@/config/navigation";
import { products } from "@/features/menu/data";
import type { Product } from "@/features/menu/model";
import type { Dictionary } from "@/i18n/dictionary.types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";

const DISPLAY_ITEMS = 4;
export const customerFavorites: Product[] = products.flatMap((category) => category.items).filter((product) => product.tags?.includes("favourite")).slice(0, DISPLAY_ITEMS);

type CustomerFavoritesProps = {
  translations: Dictionary["menu"];
  locale: Locale;
};

export function CustomerFavorites({ translations, locale }: CustomerFavoritesProps) {
  return (
    <Section>
      <Container className="mx-auto grid max-w-5xl gap-y-5 md:grid-cols-[1fr_auto]">
        <div className="flex justify-between">
          <div>
            <Heading variant="eyebrow">{translations.favorites.eyebrow}</Heading>
            <Heading variant="section">{translations.favorites.title}</Heading>
          </div>
        </div>
        <ul className="grid gap-4 md:col-span-2 md:grid-cols-2 lg:grid-cols-4">
          {customerFavorites.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} translation={translations.products[product.id]} locale={locale} />
            </li>
          ))}
        </ul>
        <Button className="md:col-start-2 md:row-start-1 md:self-end" variant="link" asChild>
          <Link href={navigation.menu}>{translations.favorites.viewFullMenu}<ArrowRight /></Link>
        </Button>
      </Container>
    </Section>
  );
}
