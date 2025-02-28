import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import cn from "src/utils/cn";
import links from "./links";
import LocaleSelector from "./LocaleSelector";
import { useEffect } from "react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "dark" | "light";
}

const MobileSidebar = ({ isOpen, onClose, mode }: MobileSidebarProps) => {
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

  // Close sidebar on ESC key
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

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 transition-opacity duration-300 z-40",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out",
          mode === "dark" ? "bg-dark border-b border-neutral-600" : "bg-white border-border border-b",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="p-5 flex flex-col items-center">
          <ul className="flex flex-col items-center gap-6 my-10">
            {links
              .filter((link) => link.link)
              .map((link) => (
                <li
                  key={link.displayName}
                  className={cn(
                    "tracking-tight py-2 px-6 rounded-sm transition hover:scale-95 cursor-pointer text-lg font-medium",
                    mode === "dark"
                      ? ["text-white hover:bg-bg-dark-light"]
                      : ["text-dark hover:bg-bg-light"]
                  )}
                  onClick={onClose}
                >
                  <Link to={link.link ?? ""}>{t(link.displayName)}</Link>
                </li>
              ))}
          </ul>
          <LocaleSelector mode={mode} />
        </div>
      </div>
    </>,
    document.body
  );
};

export default MobileSidebar;