import { type Product } from "@/features/menu/model";
import { formatPrice } from "@/lib/money";

export function MenuItem({ product }: { product: Product }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-border py-3 last:border-b-0">
      <span className="text-sm font-semibold uppercase tracking-[0.08em]">{product.name}</span>
      <span className="shrink-0 text-sm">{formatPrice(product.price)}</span>
    </li>
  );
}
