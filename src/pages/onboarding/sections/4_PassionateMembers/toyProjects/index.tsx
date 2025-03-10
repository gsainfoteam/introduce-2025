import { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import MemberLink from "src/components/common/memberLink";
import MemberWrapper from "src/components/common/memberWrapper";
import { main as koMain } from "src/locales/ko-KR";
import cn from "src/utils/cn";

import ToyLogo from "./assets/toyLogo.svg?react";

const ToyProjects = () => {
  const { t } = useTranslation();

  const BG_GRADIENT: CSSProperties = {
    background:
      "radial-gradient(69.58% 55.03% at 91.56% 13.11%, #FFD0EA 0%, #FFF 100%)",
  };

  return (
    <div
      className={cn(
        "w-full px-6 md:px-9 py-6 md:py-8",
        "border-border rounded-none md:rounded-2xl",
        "text-dark",
        "md:max-w-full *:max-w-[600px] md:*:max-w-full flex flex-col items-center",
        "border-t border-b md:border",
      )}
      style={BG_GRADIENT}
    >
      <div className="flex w-full flex-col-reverse md:flex-row md:justify-between gap-4">
        <div className="text-dark">
          <h5 className="text-2xl font-bold mb-2">
            {t("onboarding.passionateMembers.toyProjects.title")}
          </h5>
          <p className="text-lg font-medium">
            {t("onboarding.passionateMembers.toyProjects.subtitle")}
          </p>
        </div>

        <ToyLogo className="size-16" />
      </div>

      <div className="h-8" />

      <div className="flex w-full flex-col gap-3">
        {t("onboarding.passionateMembers.toyProjects.examples", {
          returnObjects: true,
        }).map((example) => (
          <Example key={example.id} {...example} />
        ))}
      </div>
    </div>
  );
};

type ExampleProps =
  (typeof koMain.onboarding.passionateMembers.toyProjects.examples)[number];

const Example = ({
  title,
  intendersId,
  description,
  thumbnail,
}: ExampleProps) => {
  return (
    <div className="border border-border rounded-lg py-4 md:py-4.5 px-4.5 md:px-5 tracking-tight w-full md:flex-row flex-col-reverse flex gap-3 bg-white/30">
      <div className="grow">
        <h6 className="text-lg font-bold mb-1">{title}</h6>

        <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1">
          {intendersId.map((intenderId) => (
            <div
              key={intenderId}
              className="max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap"
            >
              <MemberWrapper memberId={intenderId}>
                <MemberLink />
              </MemberWrapper>
            </div>
          ))}
        </div>

        <p className="leading-snug text-grey-light">{description}</p>
      </div>

      <img
        className="border border-border rounded-sm w-full md:w-[140px] h-min"
        alt={`thumbnail of ${title}`}
        src={thumbnail}
      />
    </div>
  );
};

export default ToyProjects;
