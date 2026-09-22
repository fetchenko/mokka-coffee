import Image from "next/image";
import { type Product } from "@/features/menu/model";
import { formatPrice } from "@/lib/money";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-background flex overflow-hidden rounded-xl shadow-sm md:flex-col">
      <div className="relative w-[45%] shrink-0 md:aspect-[3/2] md:w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 45vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center gap-1 p-4 md:justify-start">
        <h3 className="text-foreground text-sm font-semibold">
          {product.name}
        </h3>
        <p className="text-foreground-muted text-xs">{product.description}</p>
        <p className="text-primary mt-1 text-xs font-semibold">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
