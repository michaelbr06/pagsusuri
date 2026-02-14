const uiData = {
  title: {
    en: "Examination of Conscience",
    tg: "Pagsusuri ng Konsensya",
    bs: "Pagsusi sa Tanlag",
  },
  prepareBtn: {
    en: "Prepare Confession",
    tg: "Ihanda ang Kumpisal",
    bs: "Andama ang Kompisal",
  },
  resetBtn: { en: "Reset", tg: "Burahin", bs: "I-reset" },
  summaryTitle: {
    en: "My Confession List",
    tg: "Aking Kumpisal",
    bs: "Akong Kompisal",
  },
};

const categoriesData = [
  {
    id: "c1",
    header: {
      en: "1st Commandment — I am the LORD your God. You shall not have strange gods before me.",
      tg: "Unang Utos — Ako ang PANGINOON mong Diyos. Huwag kang magkakaroon ng ibang diyos bukod sa Akin.",
      bs: "Unang Sugo — Ako ang GINOO nga imong Dios...",
    },
    items: [
      {
        id: "s1",
        text: {
          en: "I performed my duties towards God reluctantly or grudgingly.",
          tg: "Tinupad ko ang aking mga tungkulin sa Diyos nang may pag-aatubili o mabigat sa loob.",
          bs: "Nabuhat nako ang akong mga katungdanan sa Dios nga pinugos o nagreklamo.",
        },
      },
      // Continue adding items here...
    ],
  },
  // Add Category c2, c3, etc. here in the same format
];

/**
 * 2. THE TRANSFORMER
 * This function converts the "stacked" format back into the format Stimulus expects.
 */
const transform = (lang) => {
  return {
    ui: Object.fromEntries(
      Object.entries(uiData).map(([key, translations]) => [
        key,
        translations[lang] || translations["en"],
      ]),
    ),
    categories: categoriesData.map((cat) => ({
      id: cat.id,
      header: cat.header[lang] || cat.header["en"],
      items: cat.items.map((item) => ({
        id: item.id,
        text: item.text[lang] || item.text["en"], // Fallback to English if translation is missing
      })),
    })),
  };
};

/**
 * 3. THE EXPORT
 * We export the exact same object name and structure as before.
 */
export const translations = {
  en: transform("en"),
  tg: transform("tg"),
  bs: transform("bs"),
};
