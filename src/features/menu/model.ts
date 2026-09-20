export type Currency = "PLN" | "EUR" | "USD" | "BYN";

export type ProductType = "coffee" | "non-coffee" | "pastries" | "sandwiches";

export type Money = {
  amount: number;
  currency: Currency;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: Money;
  image: string;
};

export type ProductCategories = {
  id: ProductType;
  label: string;
  items: Product[];
};

export function formatPrice(price: Money) {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: price.currency,
  }).format(price.amount / 100);
}
