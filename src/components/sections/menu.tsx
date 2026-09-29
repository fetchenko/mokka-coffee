"use client";

import { useRef, useState } from "react";

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
          <section
            key={category.id}
            ref={(element) => {
              categoryRefs.current[category.id] = element ?? undefined;
            }}
            data-category={category.id}
          >
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
        ))}
      </div>
    </section>
  );
}
