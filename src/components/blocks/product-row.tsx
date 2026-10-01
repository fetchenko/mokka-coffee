import Image from "next/image";

import type { Product } from "@/features/menu/data";
import { getCurrencyForLocale } from "@/i18n/currency";
import type { Locale } from "@/i18n/config";
import { formatPrice } from "@/lib/money";
import { ProductTranslation } from "@/i18n/dictionaries/en";

type ProductRowProps = {
  product: Product;
  translation: ProductTranslation;
  locale: Locale;
};

export function ProductRow({ product, translation, locale }: ProductRowProps) {
  const currency = getCurrencyForLocale(locale);

  return (
    <article className="grid grid-cols-[64px_minmax(0,1fr)_auto] grid-rows-2 gap-x-3 gap-y-1 border-border border-b py-2">
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
