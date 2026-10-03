import { ProductId, ProductType } from "@/features/menu/data";
import { TranslationSchema } from "@/i18n/translation-schema";

export type ProductTranslation = {
  name: string;
  description: string;
};

const navigationItems = {
  home: "Home",
  menu: "Menu",
  about: "About",
  contact: "Contact",
};

const heroFeatures = {
  specialtyCoffee: "Specialty coffee",
  topQualityBeans: "Top quality beans",
  sustainable: "Sustainable",
  ecoFriendly: "Eco-friendly",
  madeWithLove: "Made with love",
  forYou: "For you",
  community: "Community",
  localAndWarm: "Local & warm",
};

const aboutUsStats = {
  arabicaBeans: "Arabica beans",
  happyCustomers: "Happy customers",
  yearsInTown: "Years in town",
};

const testimonialTranslations = {
  annaName: "Anna K.",
  annaInitials: "AK",
  magdaName: "Magda L.",
  magdaInitials: "ML",
  juliaName: "Julia M.",
  juliaInitials: "JM",
  annaReview: "The best coffee in town! Cozy place and amazing vibes.",
  magdaReview: "I come here every morning. And delicious pastries.",
  juliaReview: "Great coffee, friendly service, and a lovely atmosphere.",
};

const visitUsTranslations = {
  eyebrow: "Visit us",
  addressLine1: "ul. Kawiorniarna 12",
  addressLine2: "31-123 Krakow, Poland",
  title: "We'd love to see you!",
  weekdays: "Mon - Fri: 7:00 - 20:00",
  weekends: "Sat - Sun: 8:00 - 21:00",
  getDirections: "Get directions",
  mapTitle: "Mokka Coffee location",
  contactEyebrow: "Contact us",
  contactTitle: "Send us a message",
  contactDescription:
    "Have a question, want to book an event or just want to say hi? Drop us a message and we'll get back to you soon",
  nameLabel: "Your name",
  emailLabel: "Your email",
  messageLabel: "Message",
  sendMessage: "Send message",
};

const logo = {
  subtitle: "Specialty Coffee",
};

export type LogoTranslation = TranslationSchema<typeof logo>;

export const language = {
  label: "Language",
  selectAriaLabel: "Select language",
  names: {
    en: "English",
    pl: "Polski",
    ru: "Русский",
  },
};

export type LanguageTranslation = TranslationSchema<typeof language>;

export const dictionary = {
  header: {
    logo,
    navigationItems,
    visitUs: "Visit Us",
    homeAriaLabel: "Mokka Coffee home",
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    openNavigation: "Open navigation",
    closeNavigation: "Close navigation",
  },
  footer: {
    logo,
    language,
    navigationItems,
    description: "Good coffee, good people, good days",
    navigation: "Footer navigation",
    followUs: "Follow us",
    copyright: "Mokka Coffee. All rights reserved",
  },

  hero: {
    demoLabel: "Fictional coffee shop · Portfolio demo",
    title: "Good days",
    titleAccent: "start with coffee",
    description: "Specialty coffee, cozy atmosphere, and friendly people",
    menuCta: "See our menu",
    visitCta: "Visit us",
    features: heroFeatures,
  },
  aboutUs: {
    eyebrow: "About us",
    title: "More than just coffee",
    imageAlt: "Inside Mokka",
      disclaimer: "Demo menu — products and prices are fictional and shown for demonstration purposes only. No orders or purchases are available.",
    description:
      "Mokka is a place where passion for coffee meets good vibes. We select the best beans from around the world and brew each cup with care. Come in, slow down and enjoy",
    contactCta: "Contact us",
    stats: aboutUsStats,
  },
  visitUs: visitUsTranslations,
  testimonials: {
    eyebrow: "Our guests love us",
    title: "What people say",
    previousLabel: "Previous testimonial",
    nextLabel: "Next testimonial",
    show: "Show testimonial",
    items: testimonialTranslations,
  },
  menu: {
    categories: {
      coffee: "Coffee",
      "non-coffee": "Non-coffee",
      pastries: "Pastries",
      sandwiches: "Sandwiches",
    } satisfies Record<ProductType, string>,
    products: {
      espresso: { name: "Espresso", description: "Rich and bold" },
      americano: { name: "Americano", description: "Simple and classic" },
      latte: { name: "Latte", description: "Smooth and milky" },
      cappuccino: { name: "Cappuccino", description: "Classic and aromatic" },
      "flat-white": { name: "Flat White", description: "Smooth and balanced" },
      mocha: { name: "Mocha", description: "Chocolatey and sweet" },
      "caramel-latte": {
        name: "Caramel Latte",
        description: "With homemade caramel",
      },
      "cold-brew": { name: "Cold Brew", description: "Refreshing and smooth" },
      "vanilla-latte": {
        name: "Vanilla Latte",
        description: "Espresso, steamed milk, and vanilla",
      },
      "coffee-latte": {
        name: "Coffee Latte",
        description: "Smooth, slow-steeped coffee served over ice",
      },
      "matcha-latte": {
        name: "Matcha Latte",
        description: "Green and energizing",
      },
      "hot-chocolate": {
        name: "Hot Chocolate",
        description: "Rich and creamy",
      },
      "chai-latte": { name: "Chai Latte", description: "Spiced and warm" },
      lemonade: { name: "Lemonade", description: "Fresh and fruity" },
      "cinnamon-roll": {
        name: "Cinnamon Roll",
        description: "Soft and fragrant",
      },
      croissant: { name: "Croissant", description: "Buttery and flaky" },
      cheesecake: { name: "Cheesecake", description: "Creamy and delicious" },
      "ham-and-cheese-sandwich": {
        name: "Ham and Cheese Sandwich",
        description:
          "Smoky ham and melted cheese served on soft, toasted, or pressed bread",
      },
      blt: {
        name: "BLT",
        description:
          "Crisp bacon, fresh lettuce, and juicy tomatoes with a light spread of mayonnaise",
      },
      "chicken-salad-croissant": {
        name: "Chicken Salad Croissant",
        description:
          "Creamy chicken salad with herbs, grapes, or nuts served inside a flaky, buttery croissant",
      },
      "grilled-cheese": {
        name: "Grilled Cheese",
        description:
          "Melted cheese pressed between sliced bread, with optional sourdough, bacon, or pesto",
      },
    } satisfies Record<ProductId, ProductTranslation>,
    navigationLabel: "Menu categories",
    preview: {
      eyebrow: "Menu preview",
      title: "Something for everyone",
      description: "Carefully selected beans in every cup",
      viewFullMenu: "View full menu",
      imageAlt: "Coffee and cake",
    },
    favorites: {
      eyebrow: "Our favorites",
      title: "Customer favorites",
      viewFullMenu: "View full menu",
    },
  },
} as const;

export type Dictionary = TranslationSchema<typeof dictionary>;
