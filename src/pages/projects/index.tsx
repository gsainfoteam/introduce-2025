import { useTranslation } from "react-i18next";
import AccountIcon from "src/assets/logos/projects/account.svg?react";
import BbunIcon from "src/assets/logos/projects/bbun.svg?react";
import BlogIcon from "src/assets/logos/projects/blog.svg?react";
import ChatbotIcon from "src/assets/logos/projects/chatbot.svg?react";
import HouseMovingOutIcon from "src/assets/logos/projects/house-moving-out.svg?react";
import PotGIcon from "src/assets/logos/projects/pot-g.svg?react";
import ZiggleIcon from "src/assets/logos/projects/ziggle.svg?react";
import Footer from "src/components/common/footer";
import Navbar from "src/components/common/navbar";

interface ProjectCardProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

const ProjectCard = ({ href, label, children }: ProjectCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-4 transition-transform duration-200 hover:scale-110"
      aria-label={label}
    >
      {children}
      <span className="text-center text-base font-medium text-white transition-colors duration-200 group-hover:text-neutral-300">
        {label}
      </span>
    </a>
  );
};

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      href: "https://account.gistory.me",
      label: t("projectsPage.account"),
      icon: <AccountIcon className="size-20 md:size-28" aria-hidden />,
    },
    {
      href: "https://ziggle.gistory.me",
      label: t("projectsPage.ziggle"),
      icon: <ZiggleIcon className="size-20 md:size-28" aria-hidden />,
    },
    {
      href: "https://bbun.gistory.me",
      label: t("projectsPage.bbun"),
      icon: <BbunIcon className="size-20 md:size-28" aria-hidden />,
    },
    {
      href: "https://pot-g.gistory.me",
      label: t("projectsPage.potg"),
      icon: <PotGIcon className="size-20 md:size-28" aria-hidden />,
    },
    {
      href: "https://moving-out.gistory.me",
      label: t("projectsPage.houseMovingOut"),
      icon: <HouseMovingOutIcon className="size-20 md:size-28" aria-hidden />,
    },
    {
      href: "https://chatbot.gistory.me",
      label: t("projectsPage.chatbot"),
      icon: <ChatbotIcon className="size-20 md:size-28" aria-hidden />,
    },
    {
      href: "https://blog.gistory.me",
      label: t("projectsPage.blog"),
      icon: <BlogIcon className="size-20 md:size-28" aria-hidden />,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-dark">
      <div className="fixed top-0 left-0 z-10 w-full content-wrapper">
        <Navbar mode="dark" hasBackground />
      </div>

      <div className="content flex flex-col items-center pb-16 pt-[120px]">
        <h1 className="mb-16 text-6xl font-bold text-white">
          {t("projectsPage.title")}
        </h1>

        <div className="grid w-full max-w-4xl grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {projects.map((item) => (
            <ProjectCard key={item.href} href={item.href} label={item.label}>
              {item.icon}
            </ProjectCard>
          ))}
        </div>
      </div>

      <Footer mode="dark" />
    </div>
  );
};

export default Projects;
