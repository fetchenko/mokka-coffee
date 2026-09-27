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
  anna: "The best coffee in town! Cozy place and amazing vibes.",
  magda: "I come here every morning. And delicious pastries.",
  julia: "Great coffee, friendly service, and a lovely atmosphere.",
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
  aboutUs: {
    eyebrow: "About us",
    title: "More than just coffee",
    imageAlt: "Inside Mokka",
    description: "Mokka is a place where passion for coffee meets good vibes. We select the best beans from around the world and brew each cup with care. Come in, slow down and enjoy.",
    visitCta: "Visit us",
    stats: aboutUsStats,
  },
  testimonials: {
    eyebrow: "Our guests love us",
    title: "What people say",
    previous: "Previous testimonial",
    next: "Next testimonial",
    show: "Show testimonial",
    items: testimonialTranslations,
  },
} as const;

export type Dictionary = typeof dictionary;
