"use client";

import { useState } from "react";

import { Container } from "@/components/layout/container";
import { MenuNavigation } from "@/components/blocks/menu-navigation";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CategorySection } from "@/components/blocks/category-section";
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
        <MenuNavigation
          categoryItems={categoryNavigation}
          labels={translations.categories}
          ariaLabel={translations.navigationLabel}
          activeCategory={activeCategory}
        />

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
