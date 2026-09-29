"use client";

import { useRef, useState } from "react";

import { CategoryNavigation } from "@/components/blocks/category-navigation";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import type { ProductType } from "@/features/menu/data";
import { products } from "@/features/menu/data";
import { categoryNavigation } from "@/features/menu/category-menu";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { CategorySection } from "@/components/blocks/category-section";

type MenuProps = {
  translations: Dictionary["menu"];
  locale: Locale;
};

export function Menu({ translations, locale }: MenuProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductType>("coffee");

  const categoryRefs = useRef<Partial<Record<ProductType, HTMLElement>>>({});

  const handleCategorySelect = (category: ProductType) => {
    setSelectedCategory(category);

    categoryRefs.current[category]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Section>
      <Container className="pb-8">
        <div className="top-header bg-background sticky z-10">
          <CategoryNavigation
            categoryItems={categoryNavigation}
            labels={translations.categories}
            ariaLabel={translations.navigationLabel}
            selectedCategory={selectedCategory}
            onSelect={handleCategorySelect}
          />
        </div>

        <div className="space-y-12">
          {products.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              translations={translations}
              locale={locale}
              registerRef={(element) => {
                categoryRefs.current[category.id] = element ?? undefined;
              }}
              onInView={setSelectedCategory}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
