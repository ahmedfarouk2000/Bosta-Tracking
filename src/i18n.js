import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./assets/langs/en.json";
import arTranslation from "./assets/langs/ar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
  },
  lng: "ar",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
