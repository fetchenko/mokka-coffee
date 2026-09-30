import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import type { ProductType } from "@/features/menu/data";
import type { CategoryItem } from "@/features/menu/category-menu";

type MenuNavigationProps = {
  categoryItems: CategoryItem[];
  labels: Record<ProductType, string>;
  ariaLabel: string;
  activeCategory: ProductType;
};

export function MenuNavigation({
  categoryItems,
  labels,
  ariaLabel,
  activeCategory,
}: MenuNavigationProps) {
  return (
    <nav
      aria-label={ariaLabel}
      className="top-header sticky z-10 bg-background"
    >
      <ul className="flex justify-around">
        {categoryItems.map((category) => {
          const Icon = category.icon;
          const label = labels[category.id];
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
                <Link
                  href={`#${category.id}`}
                  aria-current={isActive ? "location" : undefined}
                  aria-label={label}
                >
                  <Icon aria-hidden="true" />
                </Link>
              </Button>
              <p className="text-xs sm:text-sm">{label}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
