import { Product } from "@/features/menu/model";
import { formatPrice } from "@/lib/money";
import Image from "next/image";

export function ProductRow({ product }: { product: Product }) {
  return (
    <article
      key={product.id}
      className="grid grid-cols-[64px_minmax(0,1fr)_auto] grid-rows-2 gap-x-3 gap-y-1 border-b py-3"
    >
      <div className="relative col-start-1 row-span-2 size-16 overflow-hidden rounded-full">
        <Image src={product.image} alt={product.name} fill sizes="64px" className="object-cover" />
      </div>
      <h3 className="col-start-2 row-span-2 row-start-1 self-center text-sm font-semibold">
        {product.name}
      </h3>
      <p className="text-primary col-start-3 row-span-2 row-start-1 self-center text-sm font-semibold">
        {formatPrice(product.price)}
      </p>
    </article>
  );
}
