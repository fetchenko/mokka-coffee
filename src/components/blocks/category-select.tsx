import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import type { ProductType } from "@/features/menu/data";
import type { CategoryItem } from "@/features/menu/category-menu";

type CategorySelectProps = {
  categoryItems: CategoryItem[];
  labels: Record<ProductType, string>;
  ariaLabel: string;
  selectedCategory: ProductType;
  onSelect: (category: ProductType) => void;
};

export function CategorySelect(props: CategorySelectProps) {
  return (
    <nav aria-label={props.ariaLabel}>
      <ul className="flex justify-center gap-3 sm:gap-5 md:gap-6">
        {props.categoryItems.map((category) => {
          const Icon = category.icon;
          const label = props.labels[category.id];
          const isSelected = category.id === props.selectedCategory;

          return (
            <li key={category.id}>
              <Button
                aria-pressed={isSelected}
                onClick={() => props.onSelect(category.id)}
                size="default"
                variant="outline"
                className={cn(
                  "h-auto min-h-16 flex-col px-3 py-2 md:min-h-20 md:min-w-20",
                  isSelected && "bg-foreground text-background",
                )}
              >
                <Icon aria-hidden="true" className="size-7 md:size-9" />
                <span className="text-xs sm:text-sm">{label}</span>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
