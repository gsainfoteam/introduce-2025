import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";

import { Member } from "../../store/members";
import { roleLabels, roleStyles } from "./roles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: Member;
}

const Modal = ({ isOpen, onClose, member }: ModalProps) => {
  const { i18n } = useTranslation();
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[600px] h-[400px] relative border border-border shadow-lg">
        <div className="bg-gray-300 p-4" />
        <button
          className="absolute top-2.5 left-2 bg-red-500 text-red-500 px-1.5 py-1.5 rounded-full"
          onClick={onClose}
        ></button>
        <div className="p-6">
          <div className="flex mb-4">
            <img
              src={member.profileImage}
              alt={member.name.ko}
              className="w-[150px] h-[150px] object-cover mb-4"
            />
            <div className="flex flex-col ml-4 mt-4 justify-center">
              <div className="flex items-center">
                <h2 className="text-l font-bold">
                  {i18n.language === "ko-KR" ? "이름" : "name"}
                </h2>
                <div className="ml-2" />
                <p>
                  {i18n.language === "ko-KR" ? member.name.ko : member.name.en}
                </p>
              </div>

              <div className="flex items-center">
                <h2 className="text-l font-bold">github ID</h2>
                <div className="ml-2" />
                {member.githubID && (
                  <p>
                    <a
                      href={`https://github.com/${member.githubID}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      @{member.githubID}
                    </a>
                  </p>
                )}
              </div>
              <div className="flex items-center">
                <h2 className="text-l font-bold">
                  {i18n.language === "ko-KR" ? "역할" : "role"}
                </h2>
                <div className="ml-2" />
                <div className="flex flex-wrap gap-2">
                  {member.roles.map((role, index) =>
                    roleStyles[role] && roleLabels[role] ? (
                      <span
                        key={index}
                        className={`px-1 rounded-[4px] text-[14px] ${roleStyles[role]?.text} ${roleStyles[role]?.bg}`}
                      >
                        {roleLabels[role]}
                      </span>
                    ) : null,
                  )}
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4">
            {i18n.language === "ko-KR"
              ? member.introduction.ko
              : member.introduction.en}
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
