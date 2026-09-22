import { Coffee as CoffeeIcon, Croissant, CupSoda, Sandwich, type LucideIcon } from "lucide-react";
import type { ProductType } from "@/features/menu/model";
import { products } from "@/features/menu/data";

export type CategoryItem = {
  id: ProductType;
  icon: LucideIcon;
  label: string;
};

export const CATEGORY_ICONS: Record<ProductType, LucideIcon> = {
  coffee: CoffeeIcon,
  "non-coffee": CupSoda,
  pastries: Croissant,
  sandwiches: Sandwich,
};

export const categoryNavigation = products.map((product) => ({
  id: product.id,
  icon: CATEGORY_ICONS[product.id],
  label: product.label,
})) as CategoryItem[];
