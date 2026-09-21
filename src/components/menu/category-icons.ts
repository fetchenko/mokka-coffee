import { Coffee as CoffeeIcon, Croissant, CupSoda, Sandwich, type LucideIcon } from "lucide-react";
import type { ProductType } from "@/features/menu/model";

export const CATEGORY_ICONS: Record<ProductType, LucideIcon> = {
  coffee: CoffeeIcon,
  "non-coffee": CupSoda,
  pastries: Croissant,
  sandwiches: Sandwich,
};
