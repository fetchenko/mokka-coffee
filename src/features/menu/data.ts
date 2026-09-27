import type { ProductCategories } from "@/features/menu/model";

export const products: ProductCategories[] = [
  {
    id: "coffee",
    label: "Coffee",
    items: [
      {
        id: "espresso",
        price: { amount: 900, currency: "PLN" },
        image:
          "https://images.unsplash.com/photo-1710173472469-9d28e977914c?q=80&w=916&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular"],
      },
      {
        id: "americano",
        price: { amount: 1000, currency: "PLN" },
        image:
          "https://images.unsplash.com/photo-1588012841523-08163e2b0c26?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular"],
      },
      {
        id: "latte",
        price: { amount: 1200, currency: "PLN" },
        image:
          "https://images.unsplash.com/photo-1734770762633-05d2aed2e180?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular"],
      },
      {
        id: "cappuccino",
        price: { amount: 1200, currency: "PLN" },
        image:
          "https://images.unsplash.com/photo-1624287205258-b66ba3fb3f61?q=80&w=861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["favourite", "popular"],
      },
      {
        id: "flat-white",
        price: { amount: 1200, currency: "PLN" },
        image:
          "https://images.unsplash.com/photo-1676471814490-0f9aa1ea8e4a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "mocha",
        price: { amount: 1300, currency: "PLN" },
        image:
          "https://images.unsplash.com/photo-1747103217713-43b8a7a3e3ba?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["new"],
      },
      {
        id: "caramel-latte",
        price: { amount: 1300, currency: "PLN" },
        image:
          "https://images.unsplash.com/photo-1761706989159-0cf342457e78?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["new"],
      },
      {
        id: "cold-brew",
        price: { amount: 1400, currency: "PLN" },
        image:
          "https://images.unsplash.com/photo-1781663904565-cfdf6a21a9d9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["favourite", "popular"],
      },
      {
        id: "vanilla-latte",
        price: { amount: 1300, currency: "PLN" },
        image: "/assets/coffee-vanilla-latte.webp",
        tags: ["favourite"],
      },
      {
        id: "coffee-latte",
        price: { amount: 1200, currency: "PLN" },
        image: "/assets/coffee-latte.webp",
        tags: ["favourite"],
      },
    ],
  },
  {
    id: "non-coffee",
    label: "Non-coffee",
    items: [
      {
        id: "matcha-latte",
        price: { amount: 1400, currency: "PLN" },
        image:
          "https://images.unsplash.com/photo-1656504877313-9bd5542b9d6b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular", "new"],
      },
      {
        id: "hot-chocolate",
        price: { amount: 1200, currency: "PLN" },
        image:
          "https://images.unsplash.com/photo-1716973172733-2a8574d7a606?q=80&w=826&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "chai-latte",
        price: { amount: 1200, currency: "PLN" },
        image:
          "https://images.unsplash.com/photo-1717161709044-2549aa9ac3c1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["new"],
      },
      {
        id: "lemonade",
        price: { amount: 1000, currency: "PLN" },
        image:
          "https://images.unsplash.com/photo-1781663904776-c2edce194950?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["new"],
      },
    ],
  },
  {
    id: "pastries",
    label: "Pastries",
    items: [
      {
        id: "cinnamon-roll",
        price: { amount: 900, currency: "PLN" },
        image:
          "https://images.unsplash.com/photo-1727245243411-745d7ce9e4d2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["favourite"],
      },
      {
        id: "croissant",
        price: { amount: 800, currency: "PLN" },
        image:
          "https://images.unsplash.com/photo-1765100213033-ce0f38b4f478?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular", "favourite"],
      },
      {
        id: "cheesecake",
        price: { amount: 1200, currency: "PLN" },
        image:
          "https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?q=80&w=933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    items: [
      {
        id: "ham-and-cheese-sandwich",
        name: "Ham and Cheese Sandwich",
        description:
          "Smoky ham and melted cheese served on soft, toasted, or pressed bread.",
        prices: { PLN: 750, EUR: 18, USD: 20, BYN: 62 },
        image:
          "https://images.unsplash.com/photo-1695304777030-167556e5ecf3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular"],
      },
      {
        id: "blt",
        name: "BLT",
        description:
          "Crisp bacon, fresh lettuce, and juicy tomatoes with a light spread of mayonnaise.",
        prices: { PLN: 800, EUR: 19, USD: 21, BYN: 66 },
        image:
          "https://images.unsplash.com/photo-1705538363245-03fe613f9eb9?q=80&w=839&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular"],
      },
      {
        id: "chicken-salad-croissant",
        name: "Chicken Salad Croissant",
        description:
          "Creamy chicken salad with herbs, grapes, or nuts served inside a flaky, buttery croissant.",
        prices: { PLN: 950, EUR: 23, USD: 25, BYN: 78 },
        image:
          "https://images.unsplash.com/photo-1653964158593-716a5a01de7c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["new"],
      },
      {
        id: "grilled-cheese",
        name: "Grilled Cheese",
        description:
          "Melted cheese pressed between sliced bread, with optional sourdough, bacon, or pesto.",
        prices: { PLN: 700, EUR: 17, USD: 18, BYN: 57 },
        image:
          "https://images.unsplash.com/photo-1751199592465-f142293a8cc6?q=80&w=884&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["favourite"],
      },
    ],
  },
];
