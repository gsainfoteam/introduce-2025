import Navbar from "src/components/common/navbar";

import LapTopOpening from "./LapTopOpening";

const OnboardingPage = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10 content-wrapper">
        <div className="content">
          <Navbar mode="dark" />
        </div>
      </div>
      <LapTopOpening />
    </>
  );
};

export default OnboardingPage;
