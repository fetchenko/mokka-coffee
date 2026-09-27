const navigationItems = {
  home: "Strona główna",
  menu: "Menu",
  about: "O nas",
  contact: "Kontakt",
};

const heroFeatures = {
  specialtyCoffee: "Kawa specialty",
  topQualityBeans: "Ziarna najwyższej jakości",
  sustainable: "Zrównoważony rozwój",
  ecoFriendly: "Ekologiczne podejście",
  madeWithLove: "Zrobione z miłością",
  forYou: "Dla Ciebie",
  community: "Społeczność",
  localAndWarm: "Lokalnie i serdecznie",
};

export const dictionary = {
  header: {
    navigationItems,
    visitUs: "Odwiedź nas",
    homeAriaLabel: "Strona główna Mokka Coffee",
    mainNavigation: "Główna nawigacja",
    mobileNavigation: "Nawigacja mobilna",
    openNavigation: "Otwórz nawigację",
    closeNavigation: "Zamknij nawigację",
  },
  footer: {
    navigationItems,
    description: "Dobra kawa, dobrzy ludzie, dobre dni",
    navigation: "Nawigacja stopki",
    followUs: "Obserwuj nas",
    copyright: "Mokka Coffee. Wszelkie prawa zastrzeżone",
  },
  language: {
    label: "Język",
    selectAriaLabel: "Wybierz język",
    names: {
      en: "English",
      pl: "Polski",
      ru: "Rosyjski",
    },
  },
  hero: {
    title: "Dobre dni",
    titleAccent: "zaczynają się od kawy",
    description: "Kawa specialty, przytulna atmosfera i serdeczni ludzie.",
    menuCta: "Zobacz nasze menu",
    visitCta: "Odwiedź nas",
    features: heroFeatures,
  },
} as const;
