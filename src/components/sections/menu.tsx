"use client";

import { useState } from "react";
import { ProductCard } from "@/components/blocks/product-card";
import { CategoryNavigation } from "@/components/blocks/category-navigation";
import { ProductType } from "@/features/menu/model";
import { products } from "@/features/menu/data";
import { categoryNavigation } from "@/features/menu/category-menu";

export function Menu() {
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
          mode="select"
          selectedCategory={selectedCategory}
          onSelect={(category) => setSelectedCategory(category as ProductType)}
        />
      </div>

      <div className="grid gap-4 md:col-span-2 md:grid-cols-2 lg:grid-cols-4">
        {activeCategory.items.map((item) => (
          <ProductCard key={item.name} product={item} />
        ))}
      </div>
    </section>
  );
}
