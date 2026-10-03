const navigationItems = {
  home: "Strona główna",
  menu: "Menu",
  about: "O nas",
  contact: "Kontakt",
};

const heroFeatures = {
  specialtyCoffee: "Kawa specialty",
  topQualityBeans: "Ziarna najwyższej jakości",
  sustainable: "Zrównoważone podejście",
  ecoFriendly: "Dbałość o środowisko",
  madeWithLove: "Zrobione z miłością",
  forYou: "Dla Ciebie",
  community: "Społeczność",
  localAndWarm: "Ciepła atmosfera",
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
  annaReview:
    "Najlepsza kawa w mieście! Przytulne miejsce i świetna atmosfera.",
  magdaReview: "Przychodzę tutaj każdego ranka. A wypieki też mają pyszne.",
  juliaReview: "Świetna kawa, miła obsługa i cudowna atmosfera.",
};

const visitUsTranslations = {
  eyebrow: "Odwiedź nas",
  addressLine1: "ul. Kawiorniarna 12",
  addressLine2: "31-123 Kraków, Polska",
  title: "Miło będzie Cię zobaczyć!",
  weekdays: "Pon–Pt: 7:00–20:00",
  weekends: "Sob–Nd: 8:00–21:00",
  getDirections: "Wyznacz trasę",
  mapTitle: "Lokalizacja Mokka Coffee",
  contactEyebrow: "O projekcie",
  contactTitle: "Masz pytanie dotyczące projektu?",
  contactDescription:
    "To projekt do portfolio. Formularz służy wyłącznie do demonstracji interfejsu i nie wysyła wiadomości do prawdziwej firmy.",
  nameLabel: "Imię i nazwisko",
  emailLabel: "E-mail",
  messageLabel: "Twoja wiadomość",
  sendMessage: "Wypróbuj formularz",
};

const logo = {
  subtitle: "Kawa specialty",
};

const language = {
  label: "Język",
  selectAriaLabel: "Wybierz język",
  names: {
    en: "English",
    pl: "Polski",
    ru: "Rosyjski",
  },
};
export const dictionary = {
  header: {
    logo,
    navigationItems,
    visitUs: "Odwiedź nas",
    homeAriaLabel: "Strona główna Mokka Coffee",
    mainNavigation: "Główna nawigacja",
    mobileNavigation: "Nawigacja mobilna",
    openNavigation: "Otwórz nawigację",
    closeNavigation: "Zamknij nawigację",
  },
  footer: {
    logo,
    language,
    navigationItems,
    description: "Fikcyjny koncept strony kawiarni",
    navigation: "Nawigacja w stopce",
    followUs: "Obserwuj nas",
    copyright: "Mokka — fikcyjny projekt do portfolio",
  },

  hero: {
    demoLabel: "Fikcyjna kawiarnia · Projekt portfolio",
    title: "Dobre dni",
    titleAccent: "zaczynają się od kawy",
    description: "Kawa specialty, przytulna atmosfera i serdeczni ludzie",
    menuCta: "Zobacz menu",
    visitCta: "Odwiedź nas",
    features: heroFeatures,
  },
  aboutUs: {
    eyebrow: "O nas",
    title: "To coś więcej niż tylko kawa",
    imageAlt: "Wnętrze Mokka",
    disclaimer:
      "Menu demonstracyjne — produkty i ceny są fikcyjne i służą wyłącznie do celów demonstracyjnych. Zamówienia i zakupy nie są dostępne.",
    description:
      "Mokka to miejsce, w którym pasja do kawy spotyka się z dobrą atmosferą. Wybieramy najlepsze ziarna z całego świata i starannie przygotowujemy każdą filiżankę. Wpadnij, zwolnij tempo i ciesz się chwilą",
    contactCta: "Skontaktuj się z nami",
    stats: aboutUsStats,
  },
  visitUs: visitUsTranslations,
  testimonials: {
    eyebrow: "Nasi goście nas uwielbiają",
    title: "Co mówią nasi goście",
    previousLabel: "Poprzednia opinia",
    nextLabel: "Następna opinia",
    show: "Pokaż opinię",
    items: testimonialTranslations,
  },
  menu: {
    categories: {
      coffee: "Kawa",
      "non-coffee": "Bez kawy",
      pastries: "Wypieki",
      sandwiches: "Kanapki",
    },
    products: {
      espresso: { name: "Espresso", description: "Wyraziste i mocne" },
      americano: { name: "Americano", description: "Proste i klasyczne" },
      latte: { name: "Latte", description: "Delikatne i mleczne" },
      cappuccino: {
        name: "Cappuccino",
        description: "Klasyczne i aromatyczne",
      },
      "flat-white": {
        name: "Flat White",
        description: "Gładkie i zrównoważone",
      },
      mocha: { name: "Mocha", description: "Czekoladowe i słodkie" },
      "caramel-latte": {
        name: "Latte karmelowe",
        description: "Z domowym karmelem",
      },
      "cold-brew": {
        name: "Cold Brew",
        description: "Orzeźwiające i delikatne",
      },
      "vanilla-latte": {
        name: "Latte waniliowe",
        description: "Espresso, spienione mleko i wanilia",
      },
      "coffee-latte": {
        name: "Kawa z lodem",
        description: "Delikatna kawa parzona na zimno, podawana z lodem",
      },
      "matcha-latte": {
        name: "Matcha Latte",
        description: "Zielone i pobudzające",
      },
      "hot-chocolate": {
        name: "Gorąca czekolada",
        description: "Bogata i kremowa",
      },
      "chai-latte": {
        name: "Chai Latte",
        description: "Korzenne i rozgrzewające",
      },
      lemonade: { name: "Lemoniada", description: "Świeża i owocowa" },
      "cinnamon-roll": {
        name: "Cynamonka",
        description: "Miękka i aromatyczna",
      },
      croissant: { name: "Croissant", description: "Maślany i chrupiący" },
      cheesecake: { name: "Sernik", description: "Kremowy i pyszny" },
      "ham-and-cheese-sandwich": {
        name: "Kanapka z szynką i serem",
        description:
          "Wędzona szynka i roztopiony ser w miękkim, tostowanym lub grillowanym pieczywie",
      },
      blt: {
        name: "BLT",
        description:
          "Chrupiący bekon, świeża sałata i soczyste pomidory z lekką warstwą majonezu",
      },
      "chicken-salad-croissant": {
        name: "Croissant z sałatką z kurczakiem",
        description:
          "Kremowa sałatka z kurczakiem, ziołami, winogronami lub orzechami w maślanym croissancie",
      },
      "grilled-cheese": {
        name: "Grilled Cheese",
        description:
          "Roztopiony ser między kromkami pieczywa, opcjonalnie na chlebie na zakwasie, z bekonem lub pesto",
      },
    },
    navigationLabel: "Kategorie menu",
    preview: {
      eyebrow: "Menu",
      title: "Coś dla każdego",
      description: "Starannie wybrane ziarna w każdej filiżance",
      viewFullMenu: "Pełne menu",
      imageAlt: "Kawa i ciasto",
      disclaimer:
        "Menu demonstracyjne — produkty i ceny są fikcyjne i służą wyłącznie do celów demonstracyjnych. Zamówienia i zakupy nie są dostępne.",
    },
    favorites: {
      eyebrow: "Nasi faworyci",
      title: "Ulubione wśród klientów",
      viewFullMenu: "Pełne menu",
    },
  },
} as const;
