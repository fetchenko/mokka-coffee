import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { navigation } from "@/config/navigation";
import { products } from "@/features/menu/data";
import type { ProductType } from "@/features/menu/model";
import { CATEGORY_ICONS } from "@/components/menu/category-icons";

type CategoryNavigationProps =
  | { mode: "link" }
  | { mode: "select"; selectedCategory: ProductType; onSelect: (category: ProductType) => void };

export function CategoryNavigation(props: CategoryNavigationProps) {
  const isSelectable = props.mode === "select";

  return (
    <nav aria-label="Menu categories">
      <ul
        className={cn(
          isSelectable ? "flex justify-around border-b" : "grid grid-cols-4 gap-3 md:gap-6",
        )}
      >
        {products.map((category) => {
          const Icon = CATEGORY_ICONS[category.id];
          const isSelected = isSelectable && category.id === props.selectedCategory;

          if (isSelectable) {
            return (
              <li key={category.id} className="text-center">
                <Button
                  aria-label={category.label}
                  aria-pressed={isSelected}
                  onClick={() => props.onSelect(category.id)}
                  size="icon-lg"
                  variant="outline"
                  className={cn(isSelected && "bg-foreground text-background")}
                >
                  <Icon aria-hidden="true" />
                </Button>
                <p>{category.label}</p>
              </li>
            );
          }

          return (
            <li key={category.id}>
              <Link
                href={navigation.menu + "#" + category.id}
                className="group flex flex-col items-center gap-2 text-center text-xs font-medium uppercase tracking-[0.12em] transition-opacity hover:opacity-70"
              >
                <span className="flex size-12 items-center justify-center rounded-full border border-border transition-colors group-hover:bg-secondary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span>{category.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
