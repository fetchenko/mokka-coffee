const navigationItems = {
  home: "Главная",
  menu: "Меню",
  about: "О нас",
  contact: "Контакты",
};

const heroFeatures = {
  specialtyCoffee: "Спешелти кофе",
  topQualityBeans: "Зёрна высшего качества",
  sustainable: "Экологичность",
  ecoFriendly: "Забота об окружающей среде",
  madeWithLove: "С любовью",
  forYou: "Для вас",
  community: "Сообщество",
  localAndWarm: "Местное и тёплое",
};

const aboutUsStats = {
  arabicaBeans: "Зёрна арабики",
  happyCustomers: "Довольные клиенты",
  yearsInTown: "Лет в городе",
};

export const dictionary = {
  header: {
    navigationItems,
    visitUs: "Посетить нас",
    homeAriaLabel: "Главная Mokka Coffee",
    mainNavigation: "Основная навигация",
    mobileNavigation: "Мобильная навигация",
    openNavigation: "Открыть навигацию",
    closeNavigation: "Закрыть навигацию",
  },
  footer: {
    navigationItems,
    description: "Хороший кофе, хорошие люди, хорошие дни",
    navigation: "Навигация в подвале",
    followUs: "Подписывайтесь на нас",
    copyright: "Mokka Coffee. Все права защищены",
  },
  language: {
    label: "Язык",
    selectAriaLabel: "Выберите язык",
    names: {
      en: "English",
      pl: "Polski",
      ru: "Русский",
    },
  },
  hero: {
    title: "Хорошие дни",
    titleAccent: "начинаются с кофе",
    description: "Спешелти кофе, уютная атмосфера и дружелюбные люди.",
    menuCta: "Посмотреть меню",
    visitCta: "Посетить нас",
    features: heroFeatures,
  },
  aboutUs: {
    eyebrow: "О нас",
    title: "Больше, чем просто кофе",
    imageAlt: "Интерьер Mokka",
    description: "Mokka — это место, где любовь к кофе встречается с хорошей атмосферой. Мы выбираем лучшие зёрна со всего мира и тщательно готовим каждую чашку. Заходите, замедлитесь и наслаждайтесь.",
    visitCta: "Посетить нас",
    stats: aboutUsStats,
  },
} as const;
