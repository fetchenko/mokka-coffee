import { Money } from "@/lib/money";

export type Currency = "PLN" | "EUR" | "USD" | "BYN";

export type ProductType = "coffee" | "non-coffee" | "pastries" | "sandwiches";

export type ProductTag = "favourite" | "popular" | "new";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: Money;
  image: string;
  tags?: ProductTag[];
};

export type ProductCategories = {
  id: ProductType;
  label: string;
  items: Product[];
};
