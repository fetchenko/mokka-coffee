const navigationItems = {
  home: "Главная",
  menu: "Меню",
  about: "О нас",
  contact: "Контакты",
};

export const dictionary = {
  header: {
    navigationItems: navigationItems,
    visitUs: "Посетить нас",
    homeAriaLabel: "Главная Mokka Coffee",
    mainNavigation: "Основная навигация",
    mobileNavigation: "Мобильная навигация",
    openNavigation: "Открыть навигацию",
    closeNavigation: "Закрыть навигацию",
  },
  footer: {
    description: "Хороший кофе, хорошие люди, хорошие дни",
    navigation: "Навигация в подвале",
    navigationItems,
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
} as const;
