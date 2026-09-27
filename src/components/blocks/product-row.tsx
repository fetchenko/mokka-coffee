import Image from "next/image";

import type { Product } from "@/features/menu/model";
import { formatPrice, type Currency } from "@/lib/money";
import type { ProductTranslation } from "@/components/blocks/product-card";

type ProductRowProps = {
  product: Product;
  translation: ProductTranslation;
  currency: Currency;
  locale: string;
};

export function ProductRow({
  product,
  translation,
  currency,
  locale,
}: ProductRowProps) {
  return (
    <article className="grid grid-cols-[64px_minmax(0,1fr)_auto] grid-rows-2 gap-x-3 gap-y-1 border-b py-3">
      <div className="relative col-start-1 row-span-2 size-16 overflow-hidden rounded-full">
        <Image
          src={product.image}
          alt={translation.name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
      <h3 className="col-start-2 row-span-2 row-start-1 self-center text-sm font-semibold">
        {translation.name}
      </h3>
      <p className="text-primary col-start-3 row-span-2 row-start-1 self-center text-sm font-semibold">
        {formatPrice(product.prices[currency], currency, locale)}
      </p>
    </article>
  );
}
