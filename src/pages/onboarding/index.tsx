import Footer from "src/components/common/footer";
import Navbar from "src/components/common/navbar";

import ApplyInfoteam from "./sections/ApplyInfoteam";
import CoolDevCulture from "./sections/CoolDevCulture";
import Introduction from "./sections/Introduction";
import LapTopOpening from "./sections/LapTopOpening";
import PassionateMembers from "./sections/PassionateMembers";
import SmallGathering from "./sections/SmallGathering";
import ZiggleIntroduction from "./sections/ZiggleIntroduction";

const OnboardingPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-10 content-wrapper">
        <Navbar mode="dark" hasBackground={false} />
      </div>
      <LapTopOpening />

      <main className="mt-[120vh] content-wrapper ">
        <Introduction />

        <div className="h-[300px] md:h-[600px]" />

        <CoolDevCulture />

        <div className="h-[300px] md:h-[600px]" />

        <PassionateMembers />

        <div className="h-[400px] md:h-[800px]" />

        <ZiggleIntroduction />

        <div className="h-[400px]" />

        <SmallGathering />

        <div className="h-[200px]" />

        <ApplyInfoteam />
      </main>

      <Footer mode="dark" />
    </div>
  );
};

export default OnboardingPage;
