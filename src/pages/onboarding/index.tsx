import Navbar from "src/components/common/navbar";

import LapTopOpening from "./sections/1_LapTopOpening";
import Introduction from "./sections/2_Introduction";
import CoolDevCulture from "./sections/3_CoolDevCulture";
import PassionateMembers from "./sections/4_PassionateMembers";
import ZiggleIntroduction from "./sections/5_ZiggleIntroduction";
import SmallGathering from "./sections/6_SmallGathering";
import ApplyInfoteam from "./sections/7_ApplyInfoteam";

const OnboardingPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-10 content-wrapper">
        <Navbar mode="dark" hasBackground={false} />
      </div>
      <LapTopOpening />

      <main className="mt-[120vh] content-wrapper ">
        <Introduction />

        <div className="h-[600px]" />

        <CoolDevCulture />

        <div className="h-[600px]" />

        <PassionateMembers />

        <div className="h-[800px]" />

        <ZiggleIntroduction />

        <div className="h-[400px]" />

        <SmallGathering />

        <div className="h-[200px]" />

        <ApplyInfoteam />
      </main>
    </div>
  );
};

export default OnboardingPage;
