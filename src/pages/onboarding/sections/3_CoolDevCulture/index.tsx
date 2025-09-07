import { useTranslation } from "react-i18next";
import { H2, H4, H5, ShortHr } from "src/components/common/headers";

import EngIllust from "./assets/1_en.png";
import KorIllust from "./assets/1_ko.png";
import EngMobileIllust from "./assets/1_mobile_en.png";
import KorMobileIllust from "./assets/1_mobile_ko.png";

const CoolDevCulture = () => {
  const { t, i18n } = useTranslation("main");

  return (
    <>
      <section className="content flex flex-col items-center">
        <H5>{t("onboarding.coolDevCulture.asADevGroup")}</H5>
        <H2>{t("onboarding.coolDevCulture.leadsCool")}</H2>

        <div className="h-20" />

        <ShortHr />

        <div className="h-12" />

        <H4>{t("onboarding.coolDevCulture.slackGithubCollab")}</H4>
      </section>

      <div className="h-15" />

      <section className="content flex flex-col items-center">
        <img
          src={i18n.language === "en-US" ? EngIllust : KorIllust}
          alt={t("onboarding.coolDevCulture.illustAlt")}
          className="hidden md:block"
        />

        <img
          src={i18n.language === "en-US" ? EngMobileIllust : KorMobileIllust}
          alt={t("onboarding.coolDevCulture.illustAlt")}
          className="md:hidden max-w-[500px] w-full block"
        />
      </section>
    </>
  );
};

export default CoolDevCulture;
