import { CoffeeCard } from "@/components/cards/coffee-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Coffee } from "@/features/menu/model";

export const customerFavorites: Coffee[] = [
  {
    name: "Cappuccino",
    description: "Rich espresso with velvety steamed milk.",
    price: "$4.50",
    image: "/assets/cappuccino.webp",
  },
  {
    name: "Vanilla Latte",
    description: "Espresso, steamed milk, and vanilla.",
    price: "$5.00",
    image: "/assets/vanilla-latte.webp",
  },
  {
    name: "Cold Brew",
    description: "Smooth, slow-steeped coffee served over ice.",
    price: "$4.25",
    image: "/assets/cold-brew.webp",
  },
];

export function CustomerFavorites() {
  return (
    <Section>
      <Container>
        <div>
          <p>Our favorites</p>
          <h2>Customer favorites</h2>
        </div>

        <div>
          {customerFavorites.map((coffee) => (
            <CoffeeCard key={coffee.name} coffee={coffee} />
          ))}
        </div>
      </Container>
    </Section>
  );
}