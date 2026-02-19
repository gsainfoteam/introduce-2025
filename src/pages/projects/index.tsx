import { useTranslation } from "react-i18next";
import Footer from "src/components/common/footer";
import Navbar from "src/components/common/navbar";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 w-full z-10 content-wrapper">
        <Navbar mode="light" hasBackground={true} />
      </div>
      <div className="flex flex-col items-center content pb-16">
        <h1 className="py-[120px] text-6xl font-bold">
          {t("projectsPage.title")}
        </h1>
      </div>
      <Footer mode="light" />
    </div>
  );
};

export default Projects;
