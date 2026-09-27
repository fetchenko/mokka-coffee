import Image from "next/image";

import type { Product } from "@/features/menu/model";
import { formatPrice, type Currency } from "@/lib/money";

export type ProductTranslation = {
  name: string;
  description: string;
};

type ProductCardProps = {
  product: Product;
  translation: ProductTranslation;
  currency: Currency;
  locale: string;
};

export function ProductCard({
  product,
  translation,
  currency,
  locale,
}: ProductCardProps) {
  return (
    <article className="bg-background flex overflow-hidden rounded-xl shadow-sm md:flex-col">
      <div className="relative w-[45%] shrink-0 md:aspect-[3/2] md:w-full">
        <Image
          src={product.image}
          alt={translation.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 45vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center gap-1 p-4 md:justify-start">
        <h3 className="text-foreground text-sm font-semibold">
          {translation.name}
        </h3>
        <p className="text-foreground-muted text-xs">
          {translation.description}
        </p>
        <p className="text-primary mt-1 text-xs font-semibold">
          {formatPrice(product.prices[currency], currency, locale)}
        </p>
      </div>
    </article>
  );
}
