import "i18next";

import koMain from "../locales/ko-KR/main.json";

type MainTranslations = typeof koMain;

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "main";
    resources: {
      main: MainTranslations;
    };
  }
}
