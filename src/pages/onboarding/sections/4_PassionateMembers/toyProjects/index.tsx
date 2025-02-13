import { useTranslation } from "react-i18next";

import ToyLogo from "./assets/toyLogo.svg?react";

const ToyProjects = () => {
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

        <ToyLogo className="size-16" />
      </div>
    </div>
  );
};

export default ToyProjects;
