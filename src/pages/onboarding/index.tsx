import Navbar from "src/components/common/navbar";

import LapTopOpening from "./sections/1_LapTopOpening";
import Introduction from "./sections/2_Introduction";
import CoolDevCulture from "./sections/3_CoolDevCulture";

const OnboardingPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-10 content-wrapper">
        <Navbar mode="dark" hasBackground={false} />
      </div>
      <LapTopOpening />

      <main className="mt-[120vh] content-wrapper h-[500vh]">
        <Introduction />

        <div className="h-[600px]" />

        <CoolDevCulture />
      </main>
    </div>
  );
};

export default OnboardingPage;
