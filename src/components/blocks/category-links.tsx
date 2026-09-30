import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import type { ProductType } from "@/features/menu/data";
import type { CategoryItem } from "@/features/menu/category-menu";

type CategoryLinksProps = {
  categoryItems: CategoryItem[];
  labels: Record<ProductType, string>;
  ariaLabel: string;
  activeCategory: ProductType;
};

export function CategoryLinks({
  categoryItems,
  labels,
  ariaLabel,
  activeCategory,
}: CategoryLinksProps) {
  return (
    <nav
      aria-label={ariaLabel}
      className="top-header bg-background sticky z-10"
    >
      <ul className="flex justify-center gap-3 sm:gap-5 md:gap-6">
        {categoryItems.map((category) => {
          const Icon = category.icon;
          const label = labels[category.id];
          const isActive = category.id === activeCategory;

          return (
            <li key={category.id}>
              <Button
                variant="outline"
                size="default"
                asChild
                className={cn(
                  "h-auto min-h-16 flex-col px-3 py-2 md:min-h-20 md:min-w-20",
                  isActive && "bg-foreground text-background",
                )}
              >
                <Link
                  href={`#${category.id}`}
                  aria-current={isActive ? "location" : undefined}
                >
                  <Icon aria-hidden="true" className="size-7 md:size-9" />
                  <span className="text-xs sm:text-sm">{label}</span>
                </Link>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
