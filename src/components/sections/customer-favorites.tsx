import { ProductCard } from "@/components/blocks/product-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { navigation } from "@/config/navigation";
import { products } from "@/features/menu/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/dictionaries/en";

const DISPLAY_ITEMS = 4;
export const customerFavorites = products
  .flatMap((category) => category.items)
  .filter((product) => product.tags?.includes("favourite"))
  .slice(0, DISPLAY_ITEMS);

type CustomerFavoritesProps = {
  translations: Dictionary["menu"];
  locale: Locale;
};

export function CustomerFavorites({
  translations,
  locale,
}: CustomerFavoritesProps) {
  return (
    <Section>
      <Container className="mx-auto mt-4 grid gap-y-5 md:mt-8 md:grid-cols-[1fr_auto]">
        <div>
          <Text variant="eyebrow">{translations.favorites.eyebrow}</Text>
          <Heading variant="section" as="h2">
            {translations.favorites.title}
          </Heading>
        </div>
        <ul className="grid gap-4 md:col-span-2 md:grid-cols-2 lg:grid-cols-4">
          {customerFavorites.map((product) => (
            <li key={product.id}>
              <ProductCard
                product={product}
                translation={translations.products[product.id]}
                locale={locale}
              />
            </li>
          ))}
        </ul>
        <Button
          className="ml-auto px-2 md:col-start-2 md:row-start-1"
          variant="link"
          asChild
        >
          <Link href={navigation.menu}>
            {translations.favorites.viewFullMenu}
            <ArrowRight />
          </Link>
        </Button>
      </Container>
    </Section>
  );
}
