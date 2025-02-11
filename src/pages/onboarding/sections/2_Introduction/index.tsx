import { useTranslation } from "react-i18next";
import Bracket from "src/assets/common/bracket/bracket.svg?react";

const AVATARS_BASE_PATH = "src/assets/notion_style_avatars";

const Introduction = () => {
  const { t } = useTranslation("main");

  return (
    <>
      <section className="content">
        <h1 className="w-full text-center text-6xl font-bold text-dark">
          {t("onboarding.introduction.codeCampus")}
        </h1>
      </section>

      <div className="h-[300px]" />

      <section className="content border-t border-b border-solid border-border py-16 text-dark">
        <div className="flex w-full justify-center items-center">
          <Bracket />

          <img src={`${AVATARS_BASE_PATH}/1.png`} className="w-20 h-20" />
          <img src={`${AVATARS_BASE_PATH}/2.png`} className="w-20 h-20" />
          <img src={`${AVATARS_BASE_PATH}/3.png`} className="w-20 h-20" />

          <div className="-scale-x-100 -z-10">
            <Bracket />
          </div>
        </div>

        <div className="h-8" />

        <p className="text-4xl font-medium tracking-tight leading-relaxed">
          {t("onboarding.introduction.descriptions.one")}
        </p>

        <div className="h-8" />

        <p className="text-4xl font-medium tracking-tight leading-relaxed">
          {t("onboarding.introduction.descriptions.two")}
        </p>

        <div className="h-8" />

        <p className="text-4xl font-medium tracking-tight leading-relaxed">
          {t("onboarding.introduction.descriptions.three")}
        </p>
      </section>
    </>
  );
};

export default Introduction;
