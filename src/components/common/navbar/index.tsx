import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DarkLogo from "src/assets/logos/logo-dark.svg?react";
import WhiteLogo from "src/assets/logos/logo-white.svg?react";
import cn from "src/utils/cn";

import links from "./links";
import LocaleSelector from "./LocaleSelector";

export interface HeaderProps {
  mode: "dark" | "light";
}

const Navbar = ({ mode }: HeaderProps) => {
  const { t } = useTranslation("main");

  return (
    <nav className="py-4 w-full flex items-center justify-between">
      <div className="h-[34px]">
        {mode === "dark" ? <DarkLogo /> : <WhiteLogo />}
      </div>

      <div className="flex items-center gap-16">
        <ul className="flex gap-6">
          {links.map((link) => (
            <li
              key={link.displayName}
              className={cn(
                "tracking-tight py-1 px-2 rounded-sm transition hover:scale-95",
                mode === "dark"
                  ? ["text-white hover:bg-bg-dark-light"]
                  : ["text-dark hover:bg-bg-light"],
              )}
            >
              <Link to={link.link}>{t(link.displayName)}</Link>
            </li>
          ))}
        </ul>

        <LocaleSelector mode={mode} />
      </div>
    </nav>
  );
};

export default Navbar;
