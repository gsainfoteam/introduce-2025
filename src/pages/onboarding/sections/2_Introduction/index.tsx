import { useTranslation } from "react-i18next";
import Bracket from "src/assets/common/bracket/bracket.svg?react";
import Avatar1 from "src/assets/notion_style_avatars/1.png";
import Avatar2 from "src/assets/notion_style_avatars/2.png";
import Avatar3 from "src/assets/notion_style_avatars/3.png";

const Introduction = () => {
  const { t } = useTranslation("main");

  return (
    <>
      <section className="content">
        <h1 className="w-full text-center text-4xl px-8 md:px-0 md:text-6xl font-bold text-dark">
          {t("onboarding.introduction.codeCampus")}
        </h1>
      </section>

      <div className="md:h-[300px] h-[100px]" />

      <section className="content text-dark">
        <div className="w-full border-t border-border mb-16" />

        <div className="flex w-full justify-center items-center">
          <Bracket className="md:w-4.5 w-3" />

          <img src={Avatar1} className="size-16 md:size-20" />
          <img src={Avatar2} className="size-16 md:size-20" />
          <img src={Avatar3} className="size-16 md:size-20" />

          <div className="-scale-x-100 -z-10">
            <Bracket className="md:w-4.5 w-3" />
          </div>
        </div>

        <div className="h-8" />

        <p className="text-2xl md:text-4xl font-medium tracking-tight leading-relaxed break-normal">
          {t("onboarding.introduction.descriptions.one")}
        </p>

        <div className="h-8" />

        <p className="text-2xl md:text-4xl font-medium tracking-tight leading-relaxed break-normal">
          {t("onboarding.introduction.descriptions.two")}
        </p>

        <div className="h-8" />

        <p className="text-2xl md:text-4xl font-medium tracking-tight leading-relaxed break-normal">
          {t("onboarding.introduction.descriptions.three")}
        </p>

        <div className="w-full border-t border-border mt-16" />
      </section>
    </>
  );
};

export default Introduction;
