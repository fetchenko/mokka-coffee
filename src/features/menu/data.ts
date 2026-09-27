import type { ProductCategories } from "@/features/menu/model";

export const products: ProductCategories[] = [
  {
    id: "coffee",
    items: [
      {
        id: "espresso",
        prices: { PLN: 900, EUR: 210, USD: 240, BYN: 700 },
        image:
          "https://images.unsplash.com/photo-1710173472469-9d28e977914c?q=80&w=916&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular"],
      },
      {
        id: "americano",
        prices: { PLN: 1000, EUR: 233, USD: 267, BYN: 778 },
        image:
          "https://images.unsplash.com/photo-1588012841523-08163e2b0c26?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular"],
      },
      {
        id: "latte",
        prices: { PLN: 1200, EUR: 280, USD: 320, BYN: 933 },
        image:
          "https://images.unsplash.com/photo-1734770762633-05d2aed2e180?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular"],
      },
      {
        id: "cappuccino",
        prices: { PLN: 1200, EUR: 280, USD: 320, BYN: 933 },
        image:
          "https://images.unsplash.com/photo-1624287205258-b66ba3fb3f61?q=80&w=861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["favourite", "popular"],
      },
      {
        id: "flat-white",
        prices: { PLN: 1200, EUR: 280, USD: 320, BYN: 933 },
        image:
          "https://images.unsplash.com/photo-1676471814490-0f9aa1ea8e4a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "mocha",
        prices: { PLN: 1300, EUR: 303, USD: 347, BYN: 1011 },
        image:
          "https://images.unsplash.com/photo-1747103217713-43b8a7a3e3ba?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["new"],
      },
      {
        id: "caramel-latte",
        prices: { PLN: 1300, EUR: 303, USD: 347, BYN: 1011 },
        image:
          "https://images.unsplash.com/photo-1761706989159-0cf342457e78?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["new"],
      },
      {
        id: "cold-brew",
        prices: { PLN: 1400, EUR: 327, USD: 373, BYN: 1089 },
        image:
          "https://images.unsplash.com/photo-1781663904565-cfdf6a21a9d9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["favourite", "popular"],
      },
      {
        id: "vanilla-latte",
        prices: { PLN: 1300, EUR: 303, USD: 347, BYN: 1011 },
        image: "/assets/coffee-vanilla-latte.webp",
        tags: ["favourite"],
      },
      {
        id: "coffee-latte",
        prices: { PLN: 1200, EUR: 280, USD: 320, BYN: 933 },
        image: "/assets/coffee-latte.webp",
        tags: ["favourite"],
      },
    ],
  },
  {
    id: "non-coffee",
    items: [
      {
        id: "matcha-latte",
        prices: { PLN: 1400, EUR: 327, USD: 373, BYN: 1089 },
        image:
          "https://images.unsplash.com/photo-1656504877313-9bd5542b9d6b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular", "new"],
      },
      {
        id: "hot-chocolate",
        prices: { PLN: 1200, EUR: 280, USD: 320, BYN: 933 },
        image:
          "https://images.unsplash.com/photo-1716973172733-2a8574d7a606?q=80&w=826&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "chai-latte",
        prices: { PLN: 1200, EUR: 280, USD: 320, BYN: 933 },
        image:
          "https://images.unsplash.com/photo-1717161709044-2549aa9ac3c1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["new"],
      },
      {
        id: "lemonade",
        prices: { PLN: 1000, EUR: 233, USD: 267, BYN: 778 },
        image:
          "https://images.unsplash.com/photo-1781663904776-c2edce194950?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["new"],
      },
    ],
  },
  {
    id: "pastries",
    items: [
      {
        id: "cinnamon-roll",
        prices: { PLN: 900, EUR: 210, USD: 240, BYN: 700 },
        image:
          "https://images.unsplash.com/photo-1727245243411-745d7ce9e4d2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["favourite"],
      },
      {
        id: "croissant",
        prices: { PLN: 800, EUR: 187, USD: 213, BYN: 622 },
        image:
          "https://images.unsplash.com/photo-1765100213033-ce0f38b4f478?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular", "favourite"],
      },
      {
        id: "cheesecake",
        prices: { PLN: 1200, EUR: 280, USD: 320, BYN: 933 },
        image:
          "https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?q=80&w=933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: "sandwiches",
    items: [
      {
        id: "ham-and-cheese-sandwich",        prices: { PLN: 750, EUR: 175, USD: 200, BYN: 583 },
        image:
          "https://images.unsplash.com/photo-1695304777030-167556e5ecf3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular"],
      },
      {
        id: "blt",        prices: { PLN: 800, EUR: 187, USD: 213, BYN: 622 },
        image:
          "https://images.unsplash.com/photo-1705538363245-03fe613f9eb9?q=80&w=839&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular"],
      },
      {
        id: "chicken-salad-croissant",        prices: { PLN: 950, EUR: 222, USD: 253, BYN: 739 },
        image:
          "https://images.unsplash.com/photo-1653964158593-716a5a01de7c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["new"],
      },
      {
        id: "grilled-cheese",        prices: { PLN: 700, EUR: 163, USD: 187, BYN: 544 },
        image:
          "https://images.unsplash.com/photo-1751199592465-f142293a8cc6?q=80&w=884&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["favourite"],
      },
    ],
  },
];
