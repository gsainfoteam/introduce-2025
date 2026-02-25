import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import cn from "src/utils/cn";

import links from "./links";
import LocaleSelector from "./LocaleSelector";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: "dark" | "light";
}

const MobileSidebar = ({
  isOpen,
  onClose,
  mode = "light",
}: MobileSidebarProps) => {
  const { t } = useTranslation("main");

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const sidebarContent = (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0",
          mode === "dark"
            ? "bg-dark border-b border-neutral-600"
            : "bg-white border-border border-b",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="p-5 flex flex-col items-center overflow-hidden">
          <ul className="flex flex-col items-center gap-6 mt-10 my-6">
            {links
              .filter((link) => link.link)
              .map((link, index) => (
                <li
                  key={link.displayName}
                  className={cn(
                    "tracking-tight py-2 px-6 rounded-sm hover:scale-95 cursor-pointer text-lg font-medium",
                    "transform transition-all duration-300 ease-out",
                    mode === "dark"
                      ? "text-white hover:bg-bg-dark-light"
                      : "text-dark hover:bg-bg-light",
                    isOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-5",
                  )}
                  onClick={onClose}
                  style={{
                    transitionDelay: isOpen ? `${index * 70}ms` : "0ms",
                  }}
                >
                  <Link to={link.link ?? ""} viewTransition>
                    {t(link.displayName)}
                  </Link>
                </li>
              ))}
          </ul>
          <div
            className={cn(
              "transition-all duration-300 ease-out",
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5",
            )}
            style={{
              transitionDelay: isOpen
                ? `${links.filter((link) => link.link).length * 70}ms`
                : "0ms",
            }}
          >
            <LocaleSelector mode={mode} />
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(sidebarContent, document.body);
};

export default MobileSidebar;
