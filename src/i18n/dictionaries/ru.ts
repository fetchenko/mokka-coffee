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

const testimonialTranslations = {
  annaName: "Анна К.",
  annaInitials: "АК",
  magdaName: "Магда Л.",
  magdaInitials: "МЛ",
  juliaName: "Юлия М.",
  juliaInitials: "ЮМ",
  annaReview: "Лучшая кофейня в городе! Уютное место и отличная атмосфера.",
  magdaReview: "Я прихожу сюда каждое утро. И здесь вкусная выпечка.",
  juliaReview: "Отличный кофе, дружелюбное обслуживание и прекрасная атмосфера.",
};

const visitUsTranslations = {
  eyebrow: "Посетите нас",
  addressLine1: "ул. Кавиорнярна, 12",
  addressLine2: "31-123 Краков, Польша",
  title: "Будем рады вас видеть!",
  weekdays: "Пн - Пт: 7:00 - 20:00",
  weekends: "Сб - Вс: 8:00 - 21:00",
  getDirections: "Проложить маршрут",
  mapTitle: "Расположение Mokka Coffee",
  contactEyebrow: "Свяжитесь с нами",
  contactTitle: "Напишите нам",
  contactDescription: "Есть вопрос, хотите забронировать мероприятие или просто поздороваться? Напишите нам, и мы скоро ответим.",
  nameLabel: "Ваше имя",
  emailLabel: "Ваш e-mail",
  messageLabel: "Сообщение",
  sendMessage: "Отправить сообщение",
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
  visitUs: visitUsTranslations,
  testimonials: {
    eyebrow: "Наши гости нас любят",
    title: "Что говорят гости",
    previous: "Предыдущий отзыв",
    next: "Следующий отзыв",
    show: "Показать отзыв",
    items: testimonialTranslations,
  },
  menu: {
    categories: {
      coffee: "Кофе",
      "non-coffee": "Без кофе",
      pastries: "Выпечка",
      sandwiches: "Сэндвичи",
    },
    products: {
      espresso: { name: "Эспрессо", description: "Насыщенный и крепкий" },
      americano: { name: "Американо", description: "Простой и классический" },
      latte: { name: "Латте", description: "Нежный и молочный" },
      cappuccino: { name: "Капучино", description: "Классический и ароматный" },
      "flat-white": { name: "Флэт уайт", description: "Мягкий и сбалансированный" },
      mocha: { name: "Мокка", description: "Шоколадный и сладкий" },
      "caramel-latte": { name: "Карамельный латте", description: "С домашней карамелью" },
      "cold-brew": { name: "Колд-брю", description: "Освежающий и мягкий" },
      "vanilla-latte": { name: "Ванильный латте", description: "Эспрессо, взбитое молоко и ваниль." },
      "coffee-latte": { name: "Кофейный латте", description: "Мягкий кофе медленного заваривания со льдом." },
      "matcha-latte": { name: "Матча латте", description: "Зелёный и бодрящий" },
      "hot-chocolate": { name: "Горячий шоколад", description: "Насыщенный и сливочный" },
      "chai-latte": { name: "Чай латте", description: "Пряный и согревающий" },
      lemonade: { name: "Лимонад", description: "Свежий и фруктовый" },
      "cinnamon-roll": { name: "Булочка с корицей", description: "Мягкая и ароматная" },
      croissant: { name: "Круассан", description: "Сливочный и слоёный" },
      cheesecake: { name: "Чизкейк", description: "Кремовый и нежный" },
      "ham-and-cheese-sandwich": { name: "Сэндвич с ветчиной и сыром", description: "Копчёная ветчина и расплавленный сыр в мягком, поджаренном или прессованном хлебе." },
      blt: { name: "BLT", description: "Хрустящий бекон, свежий салат и сочные помидоры с лёгким слоем майонеза." },
      "chicken-salad-croissant": { name: "Круассан с куриным салатом", description: "Сливочный куриный салат с зеленью, виноградом или орехами внутри слоёного круассана." },
      "grilled-cheese": { name: "Грилд-чиз", description: "Расплавленный сыр между ломтиками хлеба, с опциональными беконом или песто." },
    },
    navigationLabel: "Категории меню",
  },
} as const;
