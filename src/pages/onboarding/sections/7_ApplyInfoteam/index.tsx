import { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import { H2 } from "src/components/common/headers";

import PositionCard from "./positionCard";

const BG_GRADIENT: CSSProperties = {
  background:
    "radial-gradient(94.26% 104.69% at 19.02% 0%, #004042 0%, #171717 100%)",
};

const ApplyInfoteam = () => {
  const { t } = useTranslation();

  return (
    <section
      className="w-full py-20 px-10 flex flex-col items-center"
      style={BG_GRADIENT}
    >
      <H2 className="text-white">{t("onboarding.applyInfoteam.title")}</H2>

      <h6 className="text-white text-lg font-medium tracking-tight">
        {t("onboarding.applyInfoteam.subtitle")}
      </h6>

      <div className="h-12" />

      <div className="flex gap-3">
        {t("onboarding.applyInfoteam.positionCards", {
          returnObjects: true,
        }).map((positionCard) => (
          <PositionCard key={positionCard.title} {...positionCard} />
        ))}
      </div>
    </section>
  );
};

export default ApplyInfoteam;
