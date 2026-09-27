"use client";

import { useState } from "react";

import { ProductCard } from "@/components/blocks/product-card";
import { CategoryNavigation } from "@/components/blocks/category-navigation";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import type { Currency } from "@/lib/money";
import type { ProductType } from "@/features/menu/model";
import { products } from "@/features/menu/data";
import { categoryNavigation } from "@/features/menu/category-menu";

type MenuProps = {
  translations: Dictionary["menu"];
  locale: Locale;
  currency: Currency;
};

export function Menu({ translations, locale, currency }: MenuProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductType>("coffee");

  const activeCategory = products.find(
    (category) => category.id === selectedCategory,
  );

  if (!activeCategory) return null;

  return (
    <section>
      <div className="top-header bg-background sticky z-10">
        <CategoryNavigation
          categoryItems={categoryNavigation}
          labels={translations.categories}
          ariaLabel={translations.navigationLabel}
          mode="select"
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <div className="grid gap-4 md:col-span-2 md:grid-cols-2 lg:grid-cols-4">
        {activeCategory.items.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            translation={translations.products[product.id]}
            currency={currency}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
