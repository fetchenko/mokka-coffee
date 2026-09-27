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
  contactDescription: "Have a question, want to book an event or just want to say hi? Drop us a message and we'll get back to you soon",
  nameLabel: "Your name",
  emailLabel: "Your email",
  messageLabel: "Message",
  sendMessage: "Send message",
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
  visitUs: visitUsTranslations,
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
