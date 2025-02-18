import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import AppStoreIcon from "./assets/appStore.svg?react";
import Fire3DIconClay from "./assets/fire3dIconClay.png";
import PlayStoreIcon from "./assets/playStore.svg?react";
import WebIcon from "./assets/web.svg?react";
import ZiggleDesktopScreenshot from "./assets/ziggle_screenshot_desktop.png";
import ZiggleMobileScreenshot from "./assets/ziggle_screenshot_mobile.png";
import ZiggleLogo from "./assets/ziggleLogo.svg?react";
import ZiggleTextLogo from "./assets/ziggleTextLogo.svg?react";

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
    <div className="w-full relative h-[3000px]">
      {/* bg */}
      <div className="top-0 left-0 absolute w-full -z-10">
        <div className="w-full h-[600px] bg-linear-180 from-white to-ziggle" />
        <div className="w-full h-[1400px] bg-ziggle" />
        <div className="w-full h-[600px] bg-linear-180 from-ziggle to-white" />
      </div>

      {/* contents */}
      <div className="w-full flex flex-col items-center relative tracking-tight text-white">
        <section className="content flex flex-col items-center">
          <div className="h-[200px]" />

          <ZiggleLogo />

          <div className="h-8" />

          {/* TODO: add text animation in textlogo */}
          <ZiggleTextLogo />

          <div className="h-30" />

          <h2 className="text-4xl font-bold">
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
          <img src={ZiggleDesktopScreenshot} className="w-3/4" />
          <img src={ZiggleMobileScreenshot} className="w-1/4" />
        </section>

        <div className="h-35" />

        <section className="content flex justify-between items-center gap-8">
          <div></div>

          <img
            src={Fire3DIconClay}
            className="w-[240px] object-cover aspect-4/5"
          />
        </section>
      </div>
    </div>
  );
};

export default ZiggleIntroduction;
