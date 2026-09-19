export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: string[];
};

export type MenuCategory = {
  name: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    name: "Coffee",
    items: [
      {
        name: "Espresso",
        description: "Double shot of our house blend",
        price: "€3.00",
      },
      {
        name: "Americano",
        description: "Espresso with hot water",
        price: "€3.50",
      },
      {
        name: "Cappuccino",
        description: "Espresso, steamed milk and silky foam",
        price: "€4.20",
      },
      {
        name: "Flat White",
        description: "Double espresso with velvety microfoam",
        price: "€4.50",
      },
      {
        name: "Latte",
        description: "Espresso with steamed milk",
        price: "€4.50",
      },
      {
        name: "Mocha",
        description: "Espresso, chocolate and steamed milk",
        price: "€5.00",
      },
    ],
  },
  {
    name: "Cold Drinks",
    items: [
      {
        name: "Iced Americano",
        description: "Espresso, cold water and ice",
        price: "€4.00",
      },
      {
        name: "Iced Latte",
        description: "Espresso, cold milk and ice",
        price: "€4.80",
      },
      {
        name: "Cold Brew",
        description: "Slow-steeped for a smooth finish",
        price: "€4.80",
        tags: ["Signature"],
      },
    ],
  },
  {
    name: "Something Sweet",
    items: [
      {
        name: "Cinnamon Roll",
        description: "Warm, soft and lightly glazed",
        price: "€4.00",
      },
      {
        name: "Banana Bread",
        description: "House-baked with toasted walnuts",
        price: "€4.20",
      },
      {
        name: "Chocolate Cookie",
        description: "Dark chocolate and sea salt",
        price: "€3.50",
      },
    ],
  },
  {
    name: "Breakfast & Lunch",
    items: [
      {
        name: "Avocado Toast",
        description: "Sourdough, avocado, herbs and chili",
        price: "€9.50",
      },
      {
        name: "Grilled Cheese",
        description: "Sourdough with three-cheese blend",
        price: "€9.00",
      },
      {
        name: "Granola Bowl",
        description: "Yogurt, granola, fruit and honey",
        price: "€8.50",
      },
    ],
  },
];
