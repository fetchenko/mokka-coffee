"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CategorySection } from "@/components/blocks/category-section";
import { cn } from "@/lib/utils/cn";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import type { ProductType } from "@/features/menu/data";
import { products } from "@/features/menu/data";
import { categoryNavigation } from "@/features/menu/category-menu";

type MenuProps = {
  translations: Dictionary["menu"];
  locale: Locale;
};

export function Menu({ translations, locale }: MenuProps) {
  const [activeCategory, setActiveCategory] =
    useState<ProductType>("coffee");

  return (
    <Section>
      <Container className="pb-8">
        <nav
          aria-label={translations.navigationLabel}
          className="top-header sticky z-10 bg-background"
        >
          <ul className="flex justify-around">
            {categoryNavigation.map((category) => {
              const Icon = category.icon;
              const label = translations.categories[category.id];
              const isActive = category.id === activeCategory;

              return (
                <li key={category.id} className="text-center">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className={cn(
                      isActive && "bg-foreground text-background",
                    )}
                  >
                    <a
                      href={`#${category.id}`}
                      aria-current={isActive ? "location" : undefined}
                      aria-label={label}
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  </Button>
                  <p className="text-xs sm:text-sm">{label}</p>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-12">
          {products.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              translations={translations}
              locale={locale}
              onInView={setActiveCategory}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
