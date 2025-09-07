import { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import ArrowRightIcon from "src/assets/common/arrow-right/arrow-right.svg?react";
import CellophaneButton from "src/components/common/cellophaneButton";
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

      <h6 className="text-white text-lg font-medium tracking-tight text-center">
        {t("onboarding.applyInfoteam.subtitle")}
      </h6>

      <div className="h-12" />

      <div className="flex gap-3 flex-wrap justify-center">
        {t("onboarding.applyInfoteam.positionCards", {
          returnObjects: true,
        }).map((positionCard) => (
          <PositionCard key={positionCard.title} {...positionCard} />
        ))}
      </div>

      <CellophaneButton className="font-medium mt-18 flex gap-2 items-center">
        {t("onboarding.applyInfoteam.goApplyButton")}
        <ArrowRightIcon className="size-6" />
      </CellophaneButton>
    </section>
  );
};

export default ApplyInfoteam;
