const navigationItems = {
  home: "Strona główna",
  menu: "Menu",
  about: "O nas",
  contact: "Kontakt",
};

const heroFeatures = [
  { label: "Kawa specialty", description: "Ziarna najwyższej jakości" },
  { label: "Zrównoważony rozwój", description: "Ekologiczne podejście" },
  { label: "Zrobione z miłością", description: "Dla Ciebie" },
  { label: "Społeczność", description: "Lokalnie i serdecznie" },
];

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
