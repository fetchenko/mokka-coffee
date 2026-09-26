export const dictionary = {
  navigation: {
    home: "Home",
    menu: "Menu",
    about: "About",
    contact: "Contact",
  },
  footer: {
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
} as const;

export type Dictionary = typeof dictionary;
