import { useGSAP } from "@gsap/react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import gsap from "gsap";
import { Maximize2, Minus, X } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import cn from "src/utils/cn";

import { Member } from "../../store/members";
import { roleLabels, roleStyles } from "./roles";

const DURATION = 0.2;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: Member;
}

const Modal = ({ isOpen, onClose, member }: ModalProps) => {
  const { t, i18n } = useTranslation("main");
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!overlayRef.current || !contentRef.current) return;
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: DURATION, ease: "power2.out" },
      );
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: DURATION,
          ease: "power2.out",
        },
      );
    },
    { dependencies: [isOpen] },
  );

  const handleClose = useCallback(() => {
    if (!overlayRef.current || !contentRef.current) {
      onClose();
      return;
    }

    gsap
      .timeline({
        onComplete: onClose,
      })
      .to(contentRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: DURATION,
        ease: "power2.in",
      })
      .to(
        overlayRef.current,
        { opacity: 0, duration: DURATION, ease: "power2.in" },
        "<",
      );
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") handleClose();
      };

      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        className="bg-white rounded-xl w-[700px] max-w-[90vw] h-[500px] max-h-[90vh] relative shadow-2xl overflow-hidden border border-gray-300 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-shrink-0 bg-gray-100 px-6 py-4 border-b border-border relative">
          <div className="group flex items-center gap-2">
            <button
              className="size-3.5 bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-200 relative flex items-center justify-center"
              onClick={handleClose}
            >
              <X
                className="size-2.5 text-red-900 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                strokeWidth={3}
              />
            </button>

            <div className="size-3.5 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors duration-200 relative flex items-center justify-center">
              <Minus
                className="size-2.5 text-amber-900 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                strokeWidth={3}
              />
            </div>

            <div className="size-3.5 bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-200 relative flex items-center justify-center">
              <Maximize2
                className="size-2.5 text-green-900 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                strokeWidth={3}
              />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-sm font-medium text-gray-700">
              {t("memberModal.title")}
            </h2>
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-8">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="size-45 bg-gray-50 rounded-xl shadow-sm border border-border overflow-hidden">
                <img
                  src={member.profileImage}
                  alt={member.name.ko}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-500 min-w-15">
                    {t("memberModal.name")}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {i18n.language === "ko-KR"
                      ? member.name.ko
                      : member.name.en}
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-500 min-w-15">
                    {t("memberModal.github")}
                  </span>
                  <a
                    href={`https://github.com/${member.githubID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors duration-200"
                  >
                    <SiGithub className="w-4 h-4 shrink-0" />
                    <span>@{member.githubID}</span>
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-gray-500 min-w-15">
                    {t("memberModal.role")}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {member.roles.map((role, index) =>
                      roleStyles[role] && roleLabels[role] ? (
                        <span
                          key={index}
                          className={cn(
                            "px-3 py-1 rounded-full text-sm font-medium",
                            roleStyles[role]?.text,
                            roleStyles[role]?.bg,
                          )}
                        >
                          {roleLabels[role]}
                        </span>
                      ) : null,
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-border/50" />

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  {t("memberModal.introduction")}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {i18n.language === "ko-KR"
                    ? member.introduction.ko
                    : member.introduction.en}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
