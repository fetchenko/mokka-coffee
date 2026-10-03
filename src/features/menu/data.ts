export const productTypes = [
  "coffee",
  "non-coffee",
  "pastries",
  "sandwiches",
] as const;

export type ProductType = (typeof productTypes)[number];

export const productIds = [
  "espresso",
  "americano",
  "latte",
  "cappuccino",
  "flat-white",
  "mocha",
  "caramel-latte",
  "cold-brew",
  "vanilla-latte",
  "coffee-latte",
  "matcha-latte",
  "hot-chocolate",
  "chai-latte",
  "lemonade",
  "cinnamon-roll",
  "croissant",
  "cheesecake",
  "ham-and-cheese-sandwich",
  "blt",
  "chicken-salad-croissant",
  "grilled-cheese",
] as const;

export type ProductId = (typeof productIds)[number];

export const productTags = ["popular", "favourite", "new"] as const;

export type ProductTag = (typeof productTags)[number];

export type Product = {
  id: ProductId;
  prices: { PLN: number };
  image: string;
  tags: ProductTag[];
};

export type ProductCategories = {
  id: ProductType;
  items: Product[];
};

export const products: ProductCategories[] = [
  {
    id: "coffee",
    items: [
      {
        id: "espresso",
        prices: { PLN: 900 },
        image:
          "https://images.unsplash.com/photo-1710173472469-9d28e977914c?q=80&w=916&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular"],
      },
      {
        id: "americano",
        prices: { PLN: 1000 },
        image:
          "https://images.unsplash.com/photo-1588012841523-08163e2b0c26?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular"],
      },
      {
        id: "latte",
        prices: { PLN: 1200 },
        image:
          "https://images.unsplash.com/photo-1734770762633-05d2aed2e180?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular"],
      },
      {
        id: "cappuccino",
        prices: { PLN: 1200 },
        image:
          "https://images.unsplash.com/photo-1624287205258-b66ba3fb3f61?q=80&w=861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["favourite", "popular"],
      },
      {
        id: "flat-white",
        prices: { PLN: 1200 },
        image:
          "https://images.unsplash.com/photo-1676471814490-0f9aa1ea8e4a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: [],
      },
      {
        id: "mocha",
        prices: { PLN: 1300 },
        image:
          "https://images.unsplash.com/photo-1747103217713-43b8a7a3e3ba?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["new"],
      },
      {
        id: "caramel-latte",
        prices: { PLN: 1300 },
        image:
          "https://images.unsplash.com/photo-1761706989159-0cf342457e78?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["new"],
      },
      {
        id: "cold-brew",
        prices: { PLN: 1400 },
        image:
          "https://images.unsplash.com/photo-1781663904565-cfdf6a21a9d9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["favourite", "popular"],
      },
      {
        id: "vanilla-latte",
        prices: { PLN: 1300 },
        image: "/assets/coffee-vanilla-latte.webp",
        tags: ["favourite"],
      },
      {
        id: "coffee-latte",
        prices: { PLN: 1200 },
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
        prices: { PLN: 1400 },
        image:
          "https://images.unsplash.com/photo-1656504877313-9bd5542b9d6b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular", "new"],
      },
      {
        id: "hot-chocolate",
        prices: { PLN: 1200 },
        image:
          "https://images.unsplash.com/photo-1716973172733-2a8574d7a606?q=80&w=826&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: [],
      },
      {
        id: "chai-latte",
        prices: { PLN: 1200 },
        image:
          "https://images.unsplash.com/photo-1717161709044-2549aa9ac3c1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["new"],
      },
      {
        id: "lemonade",
        prices: { PLN: 1000 },
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
        prices: { PLN: 900 },
        image:
          "https://images.unsplash.com/photo-1727245243411-745d7ce9e4d2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["favourite"],
      },
      {
        id: "croissant",
        prices: { PLN: 800 },
        image:
          "https://images.unsplash.com/photo-1765100213033-ce0f38b4f478?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular", "favourite"],
      },
      {
        id: "cheesecake",
        prices: { PLN: 1200 },
        image:
          "https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?q=80&w=933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: [],
      },
    ],
  },
  {
    id: "sandwiches",
    items: [
      {
        id: "ham-and-cheese-sandwich",
        prices: { PLN: 750 },
        image:
          "https://images.unsplash.com/photo-1695304777030-167556e5ecf3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular"],
      },
      {
        id: "blt",
        prices: { PLN: 800 },
        image:
          "https://images.unsplash.com/photo-1705538363245-03fe613f9eb9?q=80&w=839&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["popular"],
      },
      {
        id: "chicken-salad-croissant",
        prices: { PLN: 950 },
        image:
          "https://images.unsplash.com/photo-1653964158593-716a5a01de7c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["new"],
      },
      {
        id: "grilled-cheese",
        prices: { PLN: 700 },
        image:
          "https://images.unsplash.com/photo-1751199592465-f142293a8cc6?q=80&w=884&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["favourite"],
      },
    ],
  },
];
