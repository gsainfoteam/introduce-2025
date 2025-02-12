import { Trans, useTranslation } from "react-i18next";

const Inference = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full px-9 py-8 border-border border rounded-2xl">
      <div className="flex w-full justify-between gap-4">
        <div className="text-dark">
          <h5 className="text-2xl font-bold mb-2">
            {t("onboarding.passionateMembers.inference.title")}
          </h5>
          <p className="text-lg font-medium">
            {t("onboarding.passionateMembers.inference.subtitle")}
          </p>
        </div>

        <div className="font-league-gothic text-6xl">
          {t("onboarding.passionateMembers.inference.inferenceLogo")}
        </div>
      </div>

      <div className="h-5" />

      <p className="w-full leading-snug tracking-tight">
        <Trans i18nKey="onboarding.passionateMembers.inference.description"></Trans>
      </p>

      <div className="h-5" />

      <div className="w-full flex gap-2"></div>
    </div>
  );
};

export default Inference;
