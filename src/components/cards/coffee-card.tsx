import Image from "next/image";
import type { Coffee } from "@/features/menu/model";

type CoffeeCardProps = {
  coffee: Coffee;
};

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <article>
      <div>
        <Image
          src={coffee.image}
          alt={coffee.name}
          width={400}
          height={400}
        />
      </div>

      <div>
        <div>
          <h3>{coffee.name}</h3>
          <span>{coffee.price}</span>
        </div>

        <p>{coffee.description}</p>
      </div>
    </article>
  );
}