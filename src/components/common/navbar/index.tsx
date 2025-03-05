import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import HamburgerIcon from "src/assets/common/menu/menu.svg?react";
import CloseIcon from "src/assets/common/xmark/xmark.svg?react";
import DarkLogo from "src/assets/logos/logo-dark.svg?react";
import DarkLogoCompact from "src/assets/logos/logo-dark-compact.svg?react";
import WhiteLogo from "src/assets/logos/logo-white.svg?react";
import WhiteLogoCompact from "src/assets/logos/logo-white-compact.svg?react";
import { navbarStateAtom } from "src/store/atoms";
import cn from "src/utils/cn";

import links from "./links";
import LocaleSelector from "./LocaleSelector";
import MobileSidebar from "./MobileSidebar";

export interface HeaderProps {
  mode?: "dark" | "light";
  hasBackground?: boolean;
}

const Navbar = ({
  mode: initialMode = "light",
  hasBackground: initialHasBackground = true,
}: HeaderProps) => {
  const { t } = useTranslation("main");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [{ mode, hasBackground }, setNavbarState] = useAtom(navbarStateAtom);

  useEffect(() => {
    setNavbarState({ mode: initialMode, hasBackground: initialHasBackground });
  }, [initialMode, initialHasBackground, setNavbarState]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "py-2.5 w-full flex justify-center",
          hasBackground &&
            (mode === "dark"
              ? "bg-dark border-b border-neutral-600"
              : "bg-white border-border border-b"),
          hasBackground && isMobileMenuOpen && "bg-transparent border-b-0",
          "md:px-0",
        )}
      >
        <div className="content flex w-full justify-between items-center">
          <div className="-ml-2.5 md:ml-0">
            {mode === "dark" ? (
              <>
                <DarkLogo className="hidden md:block h-11" />
                <DarkLogoCompact className="md:hidden block size-11" />
              </>
            ) : (
              <>
                <WhiteLogo className="hidden md:block h-11" />
                <WhiteLogoCompact className="md:hidden block size-11" />
              </>
            )}
          </div>

          <button
            className={cn(
              "md:hidden block transition",
              isMobileMenuOpen && "rotate-90",
            )}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <CloseIcon
                className={cn(mode === "dark" ? "fill-white" : "fill-dark")}
              />
            ) : (
              <HamburgerIcon
                className={cn(mode === "dark" ? "fill-white" : "fill-dark")}
              />
            )}
          </button>

          <div className="hidden md:flex items-center gap-16">
            <ul className="flex gap-6">
              {links
                .filter((link) => link.link)
                .map((link) => (
                  <li
                    key={link.displayName}
                    className={cn(
                      "tracking-tight py-1 px-2 rounded-sm transition hover:scale-95 cursor-pointer",
                      mode === "dark"
                        ? ["text-white hover:bg-bg-dark-light"]
                        : ["text-dark hover:bg-bg-light"],
                    )}
                  >
                    <Link to={link.link ?? ""}>{t(link.displayName)}</Link>
                  </li>
                ))}
            </ul>
            <LocaleSelector mode={mode} />
          </div>
        </div>
      </nav>

      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        mode={mode}
      />
    </>
  );
};

export default Navbar;
