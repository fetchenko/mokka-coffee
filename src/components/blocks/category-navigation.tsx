import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { navigation } from "@/config/navigation";
import type { ProductType } from "@/features/menu/model";
import { CategoryItem } from "@/features/menu/category-menu";

type CategoryNavigationProps =
  | { categoryItems: CategoryItem[]; mode: "link" }
  | {
      categoryItems: CategoryItem[];
      mode: "select";
      selectedCategory: ProductType;
      onSelect: (category: ProductType) => void;
    };

export function CategoryNavigation(props: CategoryNavigationProps) {
  const isSelectable = props.mode === "select";

  return (
    <nav aria-label="Menu categories">
      <ul className={cn(isSelectable ? "flex justify-around" : "grid grid-cols-4 gap-3 md:gap-6")}>
        {props.categoryItems.map((category) => {
          const Icon = category.icon;
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
              <Button variant="outline" size="icon-lg" asChild>
                <Link
                  href={navigation.menu + "#" + category.id}
                  className="group flex flex-col items-center gap-2 text-center text-xs font-medium tracking-[0.12em] uppercase transition-opacity hover:opacity-70"
                >
                  <Icon aria-hidden="true" className="size-5" />
                  <span>{category.label}</span>
                </Link>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
