import { useState } from "react";
import { useTranslation } from "react-i18next";
import cn from "src/utils/cn/index.ts";

import { Member } from "../../store/members";
import Modal from "./modal.tsx";
import { roleLabels, roleStyles } from "./roles.ts";

const MemberCard = ({ member }: { member: Member }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleCardClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="group w-[280px] bg-white rounded-2xl flex flex-col p-6 border border-border cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-2 hover:border-border"
        role="button"
        tabIndex={0}
        onClick={handleCardClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleCardClick();
          }
        }}
      >
        <div className="relative overflow-hidden rounded-xl mb-5">
          <img
            src={member.profileImage}
            alt={member.name.ko}
            className="w-full aspect-square object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between gap-5">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-gangwon-edu-power text-gray-900">
              {i18n.language === "ko-KR" ? member.name.ko : member.name.en}
            </h2>
            <div className="flex flex-wrap gap-2">
              {member.roles.map((r) => (
                <span
                  key={r}
                  className={cn(
                    `px-2 py-1 rounded-full text-sm font-medium border transition-colors duration-200`,
                    roleStyles[r].text,
                    roleStyles[r].bg,
                  )}
                >
                  {roleLabels[r]}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-t border-border/50" />

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-border transition-colors duration-200 hover:bg-gray-100">
                <span className="text-gray-500">@</span>
                {member.githubID ? (
                  <a
                    href={`https://github.com/${member.githubID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors duration-200 font-inconsolata text-sm font-medium text-gray-600"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {member.githubID}
                  </a>
                ) : (
                  <span className="font-inconsolata text-sm font-medium text-gray-600">
                    {member.name.en}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-200">
                <span className="text-blue-600 font-semibold text-sm">
                  {member.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleClose} member={member} />
      )}
    </>
  );
};

export default MemberCard;
