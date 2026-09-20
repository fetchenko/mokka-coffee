import { ProductCategories } from "@/features/menu/model";

export const products: ProductCategories[] = [
  {
    id: "coffee",
    label: "Coffee",
    items: [
      {
        id: "espresso",
        name: "Espresso",
        description: "Rich and bold",
        price: { amount: 900, currency: "PLN" },
        image: "/menu/espresso.jpg",
      },
      {
        id: "americano",
        name: "Americano",
        description: "Simple and classic",
        price: { amount: 1000, currency: "PLN" },
        image: "/menu/americano.jpg",
      },
      {
        id: "latte",
        name: "Latte",
        description: "Smooth and milky",
        price: { amount: 1200, currency: "PLN" },
        image: "/menu/latte.jpg",
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        description: "Classic and aromatic",
        price: { amount: 1200, currency: "PLN" },
        image: "/menu/cappuccino.jpg",
      },
      {
        id: "flat-white",
        name: "Flat White",
        description: "Smooth and balanced",
        price: { amount: 1200, currency: "PLN" },
        image: "/menu/flat-white.jpg",
      },
      {
        id: "mocha",
        name: "Mocha",
        description: "Chocolatey and sweet",
        price: { amount: 1300, currency: "PLN" },
        image: "/menu/mocha.jpg",
      },
      {
        id: "caramel-latte",
        name: "Caramel Latte",
        description: "With homemade caramel",
        price: { amount: 1300, currency: "PLN" },
        image: "/menu/caramel-latte.jpg",
      },
      {
        id: "cold-brew",
        name: "Cold Brew",
        description: "Refreshing and smooth",
        price: { amount: 1400, currency: "PLN" },
        image: "/menu/cold-brew.jpg",
      },
    ],
  },
  {
    id: "non-coffee",
    label: "Non-coffee",
    items: [
      {
        id: "matcha-latte",
        name: "Matcha Latte",
        description: "Green and energizing",
        price: { amount: 1400, currency: "PLN" },
        image: "/menu/matcha.jpg",
      },
      {
        id: "hot-chocolate",
        name: "Hot Chocolate",
        description: "Rich and creamy",
        price: { amount: 1200, currency: "PLN" },
        image: "/menu/hot-chocolate.jpg",
      },
      {
        id: "chai-latte",
        name: "Chai Latte",
        description: "Spiced and warm",
        price: { amount: 1200, currency: "PLN" },
        image: "/menu/chai.jpg",
      },
      {
        id: "lemonade",
        name: "Lemonade",
        description: "Fresh and fruity",
        price: { amount: 1000, currency: "PLN" },
        image: "/menu/lemonade.jpg",
      },
    ],
  },
  {
    id: "pastries",
    label: "Pastries",
    items: [
      {
        id: "cinnamon-roll",
        name: "Cinnamon Roll",
        description: "Soft and fragrant",
        price: { amount: 900, currency: "PLN" },
        image: "/menu/cinnamon-roll.jpg",
      },
      {
        id: "croissant",
        name: "Croissant",
        description: "Buttery and flaky",
        price: { amount: 800, currency: "PLN" },
        image: "/menu/croissant.jpg",
      },
      {
        id: "cheesecake",
        name: "Cheesecake",
        description: "Creamy and delicious",
        price: { amount: 1200, currency: "PLN" },
        image: "/menu/cheesecake.jpg",
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    items: [],
  },
];
