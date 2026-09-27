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

const aboutUsStats = {
  arabicaBeans: "Ziarna arabiki",
  happyCustomers: "Zadowoleni klienci",
  yearsInTown: "Lat w mieście",
};

const testimonialTranslations = {
  anna: "Najlepsza kawa w mieście! Przytulne miejsce i świetna atmosfera.",
  magda: "Przychodzę tutaj każdego ranka. I mają pyszne wypieki.",
  julia: "Świetna kawa, miła obsługa i cudowna atmosfera.",
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
  aboutUs: {
    eyebrow: "O nas",
    title: "To coś więcej niż tylko kawa",
    imageAlt: "Wnętrze Mokka",
    description: "Mokka to miejsce, w którym pasja do kawy spotyka się z dobrą atmosferą. Wybieramy najlepsze ziarna z całego świata i starannie przygotowujemy każdą filiżankę. Wpadnij, zwolnij i ciesz się chwilą.",
    visitCta: "Odwiedź nas",
    stats: aboutUsStats,
  },
  testimonials: {
    eyebrow: "Nasi goście nas uwielbiają",
    title: "Co mówią nasi goście",
    previous: "Poprzednia opinia",
    next: "Następna opinia",
    show: "Pokaż opinię",
    items: testimonialTranslations,
  },
} as const;
