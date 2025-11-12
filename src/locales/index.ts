import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enMain from "./en-US/main.json";
import koMain from "./ko-KR/main.json";

const resources = {
  "ko-KR": {
    main: koMain,
  },
  "en-US": {
    main: enMain,
  },
} as const;

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko-KR",
    fallbackLng: {
      "en-US": ["en-US"],
      en: ["en-US"],
      default: ["ko-KR"],
    },
    interpolation: {
      escapeValue: false,
    },
    ns: "main",
    defaultNS: "main",
  });

export default i18next;
