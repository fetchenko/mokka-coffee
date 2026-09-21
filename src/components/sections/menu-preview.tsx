import Image from "next/image";
import Link from "next/link";
import {
  Coffee,
  Croissant,
  Sandwich,
  CupSoda,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { navigation } from "@/config/navigation";
import { products } from "@/features/menu/data";
import { formatPrice } from "@/lib/money";
import type { Product, ProductType } from "@/features/menu/model";
import { cn } from "@/lib/utils/cn";

const CATEGORY_ICONS: Record<ProductType, LucideIcon> = {
  coffee: Coffee,
  "non-coffee": CupSoda,
  pastries: Croissant,
  sandwiches: Sandwich,
};

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

function MenuItem({ product }: { product: Product }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-border py-3 last:border-b-0">
      <span className="text-sm font-semibold uppercase tracking-[0.08em]">{product.name}</span>
      <span className="shrink-0 text-sm">{formatPrice(product.price)}</span>
    </li>
  );
}

function CategoryNavigation() {
  return (
    <nav aria-label="Menu categories">
      <ul className="grid grid-cols-4 gap-3 md:gap-6">
        {products.map((category) => {
          const Icon = CATEGORY_ICONS[category.id];

          return (
            <li key={category.id}>
              <Link
                href={navigation.menu + "#" + category.id}
                className="group flex flex-col items-center gap-2 text-center text-xs font-medium uppercase tracking-[0.12em] transition-opacity hover:opacity-70"
              >
                <span className="flex size-12 items-center justify-center rounded-full border border-border transition-colors group-hover:bg-secondary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span>{category.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

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
          <CategoryNavigation />
          <div className="mt-10">
            <MobileMenuLists />
          </div>
        </div>

        <div className="hidden md:block">
          <CategoryNavigation />

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
