import { useTranslation } from "react-i18next";
import { H2, H4, H5, ShortHr } from "src/components/common/headers";

import GitTimeline from "./GitTimeline";

const CoolDevCulture = () => {
  const { t } = useTranslation("main");

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

      <section
        aria-label={t("onboarding.coolDevCulture.illustAlt")}
        className="content flex flex-col items-center"
      >
        <GitTimeline />
      </section>
    </>
  );
};

export default CoolDevCulture;
