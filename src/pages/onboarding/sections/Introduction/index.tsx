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
        <h1 className="w-full text-center text-4xl px-8 md:px-0 md:text-6xl font-bold text-dark text-pretty">
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

        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-medium tracking-tight leading-relaxed text-balance">
              {t("onboarding.introduction.infoteamIs")}{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">
                {t("onboarding.introduction.highlightText")}
              </span>{" "}
              {t("onboarding.introduction.teamDescriptionPart1")}
              <br />
              {t("onboarding.introduction.teamDescriptionPart2")}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-blue-100 border border-border">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">
                {t("onboarding.introduction.cards.sophisticatedCode.title")}
              </h3>
              <p className="text-blue-700 text-pretty">
                {t(
                  "onboarding.introduction.cards.sophisticatedCode.description",
                )}
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-purple-100 border border-border">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2 text-purple-800">
                {t("onboarding.introduction.cards.beautifulService.title")}
              </h3>
              <p className="text-purple-700 text-pretty">
                {t(
                  "onboarding.introduction.cards.beautifulService.description",
                )}
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-green-100 border border-border">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2 text-green-800">
                {t("onboarding.introduction.cards.withManyPeople.title")}
              </h3>
              <p className="text-green-700 text-pretty">
                {t("onboarding.introduction.cards.withManyPeople.description")}
              </p>
            </div>
          </div>

          <div className="text-center rounded-2xl p-8 border border-border">
            <p className="text-2xl md:text-3xl font-medium tracking-tight leading-relaxed text-pretty">
              {t("onboarding.introduction.goalTextPart1")}{" "}
              <span className="block md:inline">
                <span className="relative">
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent font-bold">
                    {t("onboarding.introduction.goalTextHighlight")}
                  </span>
                </span>
              </span>
              <br className="hidden md:inline" />
              {t("onboarding.introduction.goalTextPart2")}
            </p>
          </div>
        </div>

        <div className="w-full border-t border-border mt-16" />
      </section>
    </>
  );
};

export default Introduction;
