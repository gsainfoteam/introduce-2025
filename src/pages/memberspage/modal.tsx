import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import cn from "src/utils/cn";

import { Member } from "../../store/members";
import { roleLabels, roleStyles } from "./roles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: Member;
}

const Modal = ({ isOpen, onClose, member }: ModalProps) => {
  const { t, i18n } = useTranslation("main");
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
      onClick={() => onClose()}
    >
      <div
        className="bg-white rounded-xl w-[700px] max-w-[90vw] h-[500px] max-h-[90vh] relative shadow-2xl overflow-hidden border border-gray-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gray-100 px-6 py-4 border-b border-border relative">
          <div className="flex items-center gap-2">
            <button
              className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-200 group relative"
              onClick={onClose}
            >
              <span className="absolute inset-0 flex items-center justify-center text-red-800 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                ×
              </span>
            </button>

            <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors duration-200 group relative">
              <span className="absolute inset-0 flex items-center justify-center text-yellow-800 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                −
              </span>
            </div>

            <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-200 group relative">
              <span className="absolute inset-0 flex items-center justify-center text-green-800 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                +
              </span>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-sm font-medium text-gray-700">
              {t("memberModal.title")}
            </h2>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-col lg:flex-row gap-6">
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
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors duration-200"
                  >
                    @{member.githubID}
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
