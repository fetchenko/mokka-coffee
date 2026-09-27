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

export const dictionary = {
  header: {
    navigationItems,
    visitUs: "Visit Us",
    homeAriaLabel: "Mokka Coffee home",
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    openNavigation: "Open navigation",
    closeNavigation: "Close navigation",
  },
  footer: {
    navigationItems,
    description: "Good coffee, good people, good days",
    navigation: "Footer navigation",
    followUs: "Follow us",
    copyright: "Mokka Coffee. All rights reserved",
  },
  language: {
    label: "Language",
    selectAriaLabel: "Select language",
    names: {
      en: "English",
      pl: "Polski",
      ru: "Русский",
    },
  },
  hero: {
    title: "Good days",
    titleAccent: "start with coffee",
    description: "Specialty coffee, cozy atmosphere, and friendly people.",
    menuCta: "See our menu",
    visitCta: "Visit us",
    features: heroFeatures,
  },
} as const;

export type Dictionary = typeof dictionary;
