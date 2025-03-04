import { useTranslation } from "react-i18next";
import { H2, H4, H5, ShortHr } from "src/components/common/headers";
import { main as koMain } from "src/locales/ko-KR";

const SmallGathering = () => {
  const { t } = useTranslation();

  return (
    <section className="content flex flex-col items-center">
      <H5>{t("onboarding.smallGathering.notOnlyDev")}</H5>
      <H2>{t("onboarding.smallGathering.doVariousActivities")}</H2>

      <div className="h-20" />

      <ShortHr />

      <div className="h-12" />

      <H4>{t("onboarding.smallGathering.title")}</H4>

      <div className="h-10" />

      <div className="flex md:flex-row flex-col gap-2 w-full justify-center items-center">
        {t("onboarding.smallGathering.examples", { returnObjects: true }).map(
          (example) => (
            <Examples key={example.id} {...example} />
          ),
        )}
      </div>

      <div className="h-8" />

      <div className="font-medium tracking-tight text-dark text-lg">
        {t("onboarding.smallGathering.etc")}
      </div>
    </section>
  );
};

type ExampleProps = (typeof koMain.onboarding.smallGathering.examples)[number];

const Examples = ({ title, description, image }: ExampleProps) => {
  return (
    <div className="w-full max-w-[400px] md:w-[220px] md:h-[260px] border border-border rounded-lg flex flex-row-reverse justify-between md:flex-col px-5 py-6 gap-3 items-center md:justify-center">
      <img
        src={image}
        className="size-10 md:size-20 object-contain"
        alt={`icon of ${title}`}
      />

      <div className="flex flex-col items-start md:items-center">
        <div className="text-dark font-semibold text-lg tracking-tight text-center">
          {title}
        </div>

        <div className="text-grey-light text-sm tracking-tight text-center">
          {description}
        </div>
      </div>
    </div>
  );
};

export default SmallGathering;
