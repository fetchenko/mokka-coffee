import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import type { ProductType } from "@/features/menu/data";
import type { CategoryItem } from "@/features/menu/category-menu";

type CategoryNavigationProps = {
  categoryItems: CategoryItem[];
  labels: Record<ProductType, string>;
  ariaLabel: string;
  selectedCategory: ProductType;
  onSelect: (category: ProductType) => void;
};

export function CategoryNavigation(props: CategoryNavigationProps) {
  return (
    <nav aria-label={props.ariaLabel}>
      <ul className="flex justify-around">
        {props.categoryItems.map((category) => {
          const Icon = category.icon;
          const label = props.labels[category.id];
          const isSelected = category.id === props.selectedCategory;

          return (
            <li key={category.id} className="text-center">
              <Button
                aria-label={label}
                aria-pressed={isSelected}
                onClick={() => props.onSelect(category.id)}
                size="icon"
                variant="outline"
                className={cn(isSelected && "bg-foreground text-background")}
              >
                <Icon aria-hidden="true" />
              </Button>
              <p className="text-xs sm:text-sm">{label}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
