import { Trans, useTranslation } from "react-i18next";
import MemberLink from "src/components/common/memberLink";
import MemberWrapper from "src/components/common/memberWrapper";
import { main as koMain } from "src/locales/ko-KR";

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

      <div className="h-8" />

      <p className="w-full leading-snug tracking-tight">
        <Trans i18nKey="onboarding.passionateMembers.inference.description"></Trans>
      </p>

      <div className="h-8" />

      <div className="w-full flex gap-2">
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
    <div className="border border-border rounded-lg py-4.5 px-5 tracking-tight flex-1">
      <h6 className="text-lg font-bold">{title}</h6>
      <div>
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
