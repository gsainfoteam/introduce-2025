import { useTranslation } from "react-i18next";
import { H4, ShortHr } from "src/components/common/headers";

import Inference from "./inference";
import ToyProjects from "./toyProjects";

const PassionateMembers = () => {
  const { t } = useTranslation("main");

  return (
    <>
      <section className="content flex flex-col items-center">
        <ShortHr />

        <div className="h-12" />

        <H4>{t("onboarding.passionateMembers.title")}</H4>
      </section>

      <div className="h-10" />

      <div className="md:block hidden">
        <section className="content flex flex-col items-center">
          <Inference />

          <div className="h-6" />

          <ToyProjects />
        </section>
      </div>

      <div className="md:hidden block">
        <section className="flex flex-col items-center">
          <Inference />

          <div className="h-6" />

          <ToyProjects />
        </section>
      </div>
    </>
  );
};

export default PassionateMembers;
