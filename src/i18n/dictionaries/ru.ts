const navigationItems = {
  home: "Главная",
  menu: "Меню",
  about: "О нас",
  contact: "Контакты",
};

const heroFeatures = [
  { label: "Спешелти кофе", description: "Зёрна высшего качества" },
  { label: "Экологичность", description: "Забота об окружающей среде" },
  { label: "С любовью", description: "Для вас" },
  { label: "Сообщество", description: "Местное и тёплое" },
];

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
} as const;
