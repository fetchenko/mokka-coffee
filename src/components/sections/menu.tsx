"use client";

import { useState } from "react";
import { Coffee as CoffeeIcon, Croissant, Sandwich, CupSoda } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { ProductCard } from "@/components/cards/product-card";
import { ProductType } from "@/features/menu/model";
import { products } from "@/features/menu/data";

const CATEGORY_ICONS = {
  coffee: CoffeeIcon,
  "non-coffee": CupSoda,
  pastries: Croissant,
  sandwiches: Sandwich,
} as const;

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<ProductType>("coffee");

  const activeCategory = products.find((category) => category.id === selectedCategory);

  if (!activeCategory) {
    return null;
  }

  return (
    <section>
      <div className="top-header bg-background sticky z-10">
        <nav aria-label="Menu categories" className="flex justify-around border-b">
          {products.map((category) => {
            const Icon = CATEGORY_ICONS[category.id];
            const isSelected = category.id === selectedCategory;

            return (
              <Button
                key={category.id}
                aria-label={category.label}
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(category.id)}
                size="icon-lg"
                variant="outline"
                className={cn(isSelected && "bg-foreground text-background")}
              >
                <Icon aria-hidden="true" />
              </Button>
            );
          })}
        </nav>
      </div>

      <div className="grid gap-4 md:col-span-2 md:grid-cols-2 lg:grid-cols-4">
        {activeCategory.items.map((item) => (
          <article key={item.name}>
            <ProductCard product={item} />
          </article>
        ))}
      </div>
    </section>
  );
}
