export type CategoryId = "coffee" | "non-coffee" | "pastries" | "sandwiches";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number; // PLN, formatted in one place (see formatPrice)
  image: string;
};

export type MenuCategory = {
  id: CategoryId;
  label: string;
  items: MenuItem[];
};

export const formatPrice = (price: number) => `${price} PLN`;

export const menu = {
  coffee: {
    id: "coffee",
    label: "Coffee",
    items: [
      {
        id: "espresso",
        name: "Espresso",
        description: "Rich and bold",
        price: 9,
        image: "/menu/espresso.jpg",
      },
      {
        id: "americano",
        name: "Americano",
        description: "Simple and classic",
        price: 10,
        image: "/menu/americano.jpg",
      },
      {
        id: "latte",
        name: "Latte",
        description: "Smooth and milky",
        price: 12,
        image: "/menu/latte.jpg",
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        description: "Classic and aromatic",
        price: 12,
        image: "/menu/cappuccino.jpg",
      },
      {
        id: "flat-white",
        name: "Flat White",
        description: "Smooth and balanced",
        price: 12,
        image: "/menu/flat-white.jpg",
      },
      {
        id: "mocha",
        name: "Mocha",
        description: "Chocolatey and sweet",
        price: 13,
        image: "/menu/mocha.jpg",
      },
      {
        id: "caramel-latte",
        name: "Caramel Latte",
        description: "With homemade caramel",
        price: 13,
        image: "/menu/caramel-latte.jpg",
      },
      {
        id: "cold-brew",
        name: "Cold Brew",
        description: "Refreshing and smooth",
        price: 14,
        image: "/menu/cold-brew.jpg",
      },
    ],
  },
  nonCoffee: {
    id: "non-coffee",
    label: "Non-coffee",
    items: [
      {
        id: "matcha-latte",
        name: "Matcha Latte",
        description: "Green and energizing",
        price: 14,
        image: "/menu/matcha.jpg",
      },
      {
        id: "hot-chocolate",
        name: "Hot Chocolate",
        description: "Rich and creamy",
        price: 12,
        image: "/menu/hot-chocolate.jpg",
      },
      {
        id: "chai-latte",
        name: "Chai Latte",
        description: "Spiced and warm",
        price: 12,
        image: "/menu/chai.jpg",
      },
      {
        id: "lemonade",
        name: "Lemonade",
        description: "Fresh and fruity",
        price: 10,
        image: "/menu/lemonade.jpg",
      },
    ],
  },
  pastries: {
    id: "pastries",
    label: "Pastries",
    items: [
      {
        id: "cinnamon-roll",
        name: "Cinnamon Roll",
        description: "Soft and fragrant",
        price: 9,
        image: "/menu/cinnamon-roll.jpg",
      },
      {
        id: "croissant",
        name: "Croissant",
        description: "Buttery and flaky",
        price: 8,
        image: "/menu/croissant.jpg",
      },
      {
        id: "cheesecake",
        name: "Cheesecake",
        description: "Creamy and delicious",
        price: 12,
        image: "/menu/cheesecake.jpg",
      },
    ],
  },
  sandwiches: {
    id: "sandwiches",
    label: "Sandwiches",
    items: [],
  },
};

export function Menu() {
  return <div>Menu</div>;
}
