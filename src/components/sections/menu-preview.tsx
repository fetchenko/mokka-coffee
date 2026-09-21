import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { CategoryNavigation } from "@/components/menu/category-navigation";
import { MenuItem } from "@/components/menu/menu-item";
import { navigation } from "@/config/navigation";
import { products } from "@/features/menu/data";
import type { Product } from "@/features/menu/model";
import { cn } from "@/lib/utils/cn";

const coffee = products.find((category) => category.id === "coffee")!;
const previewItems = coffee.items.slice(0, 6);

const mobileCategories = products.filter((category) =>
  ["coffee", "non-coffee", "pastries"].includes(category.id),
);

const galleryItems = [
  coffee.items.find((product) => product.id === "latte"),
  products
    .find((category) => category.id === "pastries")
    ?.items.find((product) => product.id === "cinnamon-roll"),
].filter((product): product is Product => Boolean(product));

function DesktopMenuList({ items }: { items: Product[] }) {
  return (
    <ul>
      {items.map((product) => (
        <MenuItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

function MobileMenuLists() {
  return (
    <div className="space-y-8">
      {mobileCategories.map((category) => (
        <div key={category.id}>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            {category.label}
          </h3>
          <ul>
            {category.items.slice(0, 4).map((product) => (
              <MenuItem key={product.id} product={product} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function MenuPreview() {
  return (
    <Section>
      <Container className="max-w-7xl">
        <div className="mb-8 space-y-2 md:mb-10">
          <Heading variant="eyebrow">Menu preview</Heading>
          <Heading variant="section">Something for everyone</Heading>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Carefully selected beans in every cup.
          </p>
        </div>

        <div className="md:hidden">
          <CategoryNavigation mode="link" />
          <div className="mt-10">
            <MobileMenuLists />
          </div>
        </div>

        <div className="hidden md:block">
          <CategoryNavigation mode="link" />

          <div className="mt-12 grid grid-cols-5 gap-8 lg:gap-10">
            <div className="col-span-2">
              <DesktopMenuList items={previewItems.slice(0, 3)} />
            </div>

            <div className="col-span-2">
              <DesktopMenuList items={previewItems.slice(3, 6)} />
            </div>

            <div className="col-span-1 grid grid-rows-2 gap-4">
              {galleryItems.map((product) => (
                <div
                  key={product.id}
                  className="relative min-h-44 overflow-hidden rounded-xl bg-secondary"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link
          href={navigation.menu}
          className={cn(
            "mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.08em]",
            "text-primary underline-offset-4 hover:underline md:mt-10",
          )}
        >
          View all
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </Container>
    </Section>
  );
}
