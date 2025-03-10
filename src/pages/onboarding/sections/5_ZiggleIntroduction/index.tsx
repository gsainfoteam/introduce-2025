import { Fragment } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ArrowRightIcon from "src/assets/common/arrow-right/arrow-right.svg?react";
import CellophaneButton from "src/components/common/cellophaneButton";
import { H4, H5 } from "src/components/common/headers";

import AppStoreIcon from "./assets/appStore.svg?react";
import Fire3DIconClay from "./assets/fire3dIconClay.png";
import PlayStoreIcon from "./assets/playStore.svg?react";
import WebIcon from "./assets/web.svg?react";
import ZiggleDesktopScreenshot from "./assets/ziggle_screenshot_desktop.png";
import ZiggleMobileScreenshot from "./assets/ziggle_screenshot_mobile.png";
import ZiggleLogo from "./assets/ziggleLogo.svg?react";
import ZiggleTextAnimation from "./ziggleTextAnimation";

const LINKS = [
  {
    logo: WebIcon,
    link: "https://ziggle.gistory.me",
    displayName: "WEB",
  },
  {
    logo: AppStoreIcon,
    link: "https://apps.apple.com/kr/app/%EC%A7%80%EA%B8%80/id6451740697",
    displayName: "iOS",
  },
  {
    logo: PlayStoreIcon,
    link: "https://play.google.com/store/apps/details?id=me.gistory.ziggle&pcampaignid=web_share",
    displayName: "Android",
  },
];

const ZiggleIntroduction = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full relative">
      {/* bg */}
      <div className="top-0 left-0 absolute w-full -z-10 flex flex-col h-full">
        <div className="w-full flex-[3] bg-linear-180 from-white to-ziggle" />
        <div className="w-full flex-[7] bg-ziggle" />
        <div className="w-full flex-[3] bg-linear-180 from-ziggle to-white" />
      </div>

      {/* contents */}
      <div className="w-full flex flex-col items-center relative tracking-tight text-white">
        <div className="h-[200px]" />

        <section className="content flex flex-col items-center">
          <ZiggleLogo className="md:size-60 size-30" />

          <div className="md:h-8 h-4" />

          <div className="w-[200px] md:w-[320px] -translate-x-[8px] md:-translate-x-[15px]">
            <ZiggleTextAnimation />
          </div>

          <div className="h-20 md:h-35" />

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            {t("onboarding.ziggleIntroduction.title")}
          </h2>

          <div className="h-12" />

          <p className="font-medium text-lg mb-4">
            {t("onboarding.ziggleIntroduction.tryNow")}
          </p>

          <div className="justify-center flex gap-4 items-center">
            {LINKS.map((link, index) => (
              <Fragment key={link.displayName}>
                <Link to={link.link} className="flex flex-col items-center">
                  <link.logo className="size-15 mb-2" />
                  <p>{link.displayName}</p>
                </Link>

                {LINKS.length - 1 !== index && (
                  <div className="w-[1px] h-8 bg-white" />
                )}
              </Fragment>
            ))}
          </div>
        </section>

        <div className="h-20" />

        <section className="content flex gap-2 items-start justify-center">
          <img
            src={ZiggleDesktopScreenshot}
            className="w-3/4 hidden md:block"
            alt={t("onboarding.ziggleIntroduction.webScreenshotAlt")}
          />
          <img
            src={ZiggleMobileScreenshot}
            className="md:w-1/4 w-full max-w-[320px] md:max-w-full"
            alt={t("onboarding.ziggleIntroduction.mobileScreenshotAlt")}
          />
        </section>

        <div className="h-20 md:h-35" />

        <section className="content flex flex-col-reverse md:flex-row md:justify-between items-center gap-8">
          <div className="text-white">
            <H4 className="text-white font-semibold text-left mb-6">
              {t("onboarding.ziggleIntroduction.description.title")}
            </H4>

            <p>
              <Trans i18nKey="onboarding.ziggleIntroduction.description.content1" />
            </p>

            <p className="mt-4">
              <Trans i18nKey="onboarding.ziggleIntroduction.description.content2" />
            </p>
          </div>

          <img
            src={Fire3DIconClay}
            className="w-[160px] md:w-[240px] object-cover aspect-4/5"
            alt="fire3DIconClay"
          />
        </section>

        <div className="h-[100px]" />

        <H5 className="text-white">
          {t("onboarding.ziggleIntroduction.wantToSeeMore")}
        </H5>

        <CellophaneButton className="font-medium mt-6 flex gap-2 items-center">
          {t("onboarding.ziggleIntroduction.goSeeProjectButton")}

          <ArrowRightIcon className="size-6" />
        </CellophaneButton>

        <div className="h-[300px]" />
      </div>
    </div>
  );
};

export default ZiggleIntroduction;
