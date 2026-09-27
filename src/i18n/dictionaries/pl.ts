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
  annaName: "Anna K.",
  annaInitials: "AK",
  magdaName: "Magda L.",
  magdaInitials: "ML",
  juliaName: "Julia M.",
  juliaInitials: "JM",
  annaReview: "Najlepsza kawa w mieście! Przytulne miejsce i świetna atmosfera.",
  magdaReview: "Przychodzę tutaj każdego ranka. I mają pyszne wypieki.",
  juliaReview: "Świetna kawa, miła obsługa i cudowna atmosfera.",
};

const visitUsTranslations = {
  eyebrow: "Odwiedź nas",
  addressLine1: "ul. Kawiorniarna 12",
  addressLine2: "31-123 Kraków, Polska",
  title: "Chętnie Cię zobaczymy!",
  weekdays: "Pon - Pt: 7:00 - 20:00",
  weekends: "Sob - Nd: 8:00 - 21:00",
  getDirections: "Wyznacz trasę",
  mapTitle: "Lokalizacja Mokka Coffee",
  contactEyebrow: "Skontaktuj się z nami",
  contactTitle: "Napisz do nas",
  contactDescription: "Masz pytanie, chcesz zarezerwować wydarzenie czy po prostu powiedzieć cześć? Napisz do nas, a wkrótce odpowiemy.",
  nameLabel: "Imię",
  emailLabel: "Twój e-mail",
  messageLabel: "Wiadomość",
  sendMessage: "Wyślij wiadomość",
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
  visitUs: visitUsTranslations,
  testimonials: {
    eyebrow: "Nasi goście nas uwielbiają",
    title: "Co mówią nasi goście",
    previous: "Poprzednia opinia",
    next: "Następna opinia",
    show: "Pokaż opinię",
    items: testimonialTranslations,
  },
} as const;
