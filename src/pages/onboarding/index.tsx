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

      <main className="content-wrapper">
        <section className="mt-[120vh] content h-[500vh]">
          <h1 className="w-full text-center text-6xl font-bold">
            코드로 캠퍼스를 바꾸는 사람들
          </h1>
        </section>
      </main>
    </>
  );
};

export default OnboardingPage;
