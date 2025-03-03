import { CSSProperties } from "react";
import { Trans, useTranslation } from "react-i18next";
import MemberLink from "src/components/common/memberLink";
import MemberWrapper from "src/components/common/memberWrapper";
import { main as koMain } from "src/locales/ko-KR";

const Inference = () => {
  const { t } = useTranslation();

  const BG_GRADIENT: CSSProperties = {
    background:
      "radial-gradient(66.72% 66.72% at 85.94% 9.72%, #DDD7FF 0%, #FFF 84.5%)",
  };

  return (
    <div
      className="w-full px-6 md:px-9 py-6 md:py-8 border-border rounded-none md:rounded-2xl text-dark md:max-w-full max-w-[500px] border-t border-b md:border "
      style={BG_GRADIENT}
    >
      <div className="flex w-full flex-col-reverse md:flex-row md:justify-between gap-4">
        <div>
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

      <div className="h-8" />

      <p className="w-full leading-snug tracking-tight">
        <Trans i18nKey="onboarding.passionateMembers.inference.description"></Trans>
      </p>

      <div className="h-8" />

      <div className="w-full flex-col flex md:flex-row gap-2">
        {t("onboarding.passionateMembers.inference.examples", {
          returnObjects: true,
        }).map((example) => (
          <Example {...example} key={example.id} />
        ))}
      </div>
    </div>
  );
};

type ExampleProps =
  (typeof koMain.onboarding.passionateMembers.inference.examples)[number];

const Example = ({ title, presentersId, description }: ExampleProps) => {
  return (
    <div className="border border-border rounded-lg py-4 md:py-4.5 px-4.5 md:px-5 tracking-tight flex-1 bg-white/30">
      <h6 className="text-lg font-bold mb-2">{title}</h6>
      <div className="mb-2">
        {presentersId.map((presenterId) => (
          <MemberWrapper memberId={presenterId} key={presenterId}>
            <MemberLink />
          </MemberWrapper>
        ))}
      </div>
      <p className="leading-snug text-grey-light">{description}</p>
    </div>
  );
};

export default Inference;
