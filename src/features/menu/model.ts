import type { Currency } from "@/lib/money";

export type ProductId =
  | "espresso"
  | "americano"
  | "latte"
  | "cappuccino"
  | "flat-white"
  | "mocha"
  | "caramel-latte"
  | "cold-brew"
  | "vanilla-latte"
  | "coffee-latte"
  | "matcha-latte"
  | "hot-chocolate"
  | "chai-latte"
  | "lemonade"
  | "cinnamon-roll"
  | "croissant"
  | "cheesecake"
  | "ham-and-cheese-sandwich"
  | "blt"
  | "chicken-salad-croissant"
  | "grilled-cheese";

export type ProductType = "coffee" | "non-coffee" | "pastries" | "sandwiches";

export type ProductTag = "favourite" | "popular" | "new";

export type Product = {
  id: ProductId;
  prices: Record<Currency, number>;
  image: string;
  tags?: ProductTag[];
};

export type ProductCategories = {
  id: ProductType;
  items: Product[];
};
