import {
  Coffee as CoffeeIcon,
  Croissant,
  CupSoda,
  Sandwich,
  type LucideIcon,
} from "lucide-react";

import type { ProductType } from "@/features/menu/model";

export type CategoryItem = {
  id: ProductType;
  icon: LucideIcon;
};

export const CATEGORY_ICONS: Record<ProductType, LucideIcon> = {
  coffee: CoffeeIcon,
  "non-coffee": CupSoda,
  pastries: Croissant,
  sandwiches: Sandwich,
};

export const categoryNavigation: CategoryItem[] = [
  { id: "coffee", icon: CATEGORY_ICONS.coffee },
  { id: "non-coffee", icon: CATEGORY_ICONS["non-coffee"] },
  { id: "pastries", icon: CATEGORY_ICONS.pastries },
  { id: "sandwiches", icon: CATEGORY_ICONS.sandwiches },
];
