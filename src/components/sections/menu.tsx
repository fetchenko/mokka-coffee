"use client";

import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import { CategoryNavigation } from "@/components/blocks/category-navigation";
import { ProductCard } from "@/components/blocks/product-card";
import { Heading } from "@/components/ui/heading";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import type { ProductType } from "@/features/menu/data";
import { products } from "@/features/menu/data";
import { categoryNavigation } from "@/features/menu/category-menu";

type MenuProps = {
  translations: Dictionary["menu"];
  locale: Locale;
};

type CategorySectionProps = {
  category: (typeof products)[number];
  translations: Dictionary["menu"];
  locale: Locale;
  registerRef: (element: HTMLElement | null) => void;
  onInView: (category: ProductType) => void;
};

function CategorySection({
  category,
  translations,
  locale,
  registerRef,
  onInView,
}: CategorySectionProps) {
  const { ref: observerRef } = useInView({
    threshold: 0,
    rootMargin: "-8rem 0px -70% 0px",
    onChange: (inView) => {
      if (inView) {
        onInView(category.id);
      }
    },
  });

  return (
    <section
      ref={registerRef}
      data-category={category.id}
      className="scroll-mt-32"
    >
      <div ref={observerRef} aria-hidden="true" className="h-px" />

      <Heading variant="block">
        {translations.categories[category.id]}
      </Heading>

      <div className="grid gap-4 md:col-span-2 md:grid-cols-2 lg:grid-cols-4">
        {category.items.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            translation={translations.products[product.id]}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}

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
    <section>
      <div className="top-header bg-background sticky z-10">
        <CategoryNavigation
          categoryItems={categoryNavigation}
          labels={translations.categories}
          ariaLabel={translations.navigationLabel}
          mode="select"
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
    </section>
  );
}
