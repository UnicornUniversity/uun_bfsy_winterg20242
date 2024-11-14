import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { DateTime } from "luxon";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          AppName: "ToDoList Overview",
          itemCount_one: "You see {{count}} item",
          itemCount_other: "You see {{count}} items",
          // here we will place our translations...
          today: "Today is {{date}}",
        },
      },
      cs: {
        translation: {
          AppName: "Přehled úkolovníků",
          itemCount_zero: "Nic nevidíš",
          itemCount_one: "Vidíš {{count}} položku",
          itemCount_few: "Vidíš {{count}} položky",
          itemCount_other: "Vidíš {{count}} položek",
          // here we will place our translations...
        },
      },
    },
  });

// new usage
i18n.services.formatter.add("DATE_HUGE", (value, lng, options) => {
  return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE);
});

export default i18n;
