import { useState } from "react";
import { useTranslation } from "react-i18next";
import cn from "src/utils/cn/index.ts";

import { Member } from "../../store/members";
import Fofo from "./fofo.svg?react";
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
        className="w-[240px] bg-white rounded-lg flex flex-col p-[18px] border-[3px] border-border cursor-pointer gap-5"
        onClick={handleCardClick}
      >
        <img
          src={member.profileImage}
          alt={member.name.ko}
          className="w-full aspect-square object-cover"
        />
        <div className="h-[130px] flex flex-col justify-between">
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-2xl font-bold font-gangwon-edu-power">
              {i18n.language === "ko-KR" ? member.name.ko : member.name.en}
            </h2>
            <div className="flex flex-wrap gap-2 font-inclusive-sans">
              {member.roles.map((r) => (
                <span
                  key={r}
                  className={cn(
                    `px-1 rounded-sm text-sm border`,
                    roleStyles[r].text,
                    roleStyles[r].bg,
                  )}
                >
                  {roleLabels[r]}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            {member.githubID && (
              <div className="border border-border px-[5px] flex gap-[6px] text-[13px] font-inconsolata font-semibold items-center">
                <a
                  href={`https://github.com/${member.githubID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  @{member.githubID}
                </a>
                <div className="border-x border-border size-5 overflow-hidden relative">
                  <div className="flex flex-col gap-[1px] w-[40px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45">
                    <div className="h-[1px] bg-border" />
                    <div className="h-[1px] bg-border" />
                    <div className="h-[1px] bg-border" />
                    <div className="h-[1px] bg-border" />
                    <div className="h-[1px] bg-border" />
                    <div className="h-[1px] bg-border" />
                    <div className="h-[1px] bg-border" />
                    <div className="h-[1px] bg-border" />
                    <div className="h-[1px] bg-border" />
                    <div className="h-[1px] bg-border" />
                    <div className="h-[1px] bg-border" />
                    <div className="h-[1px] bg-border" />
                    <div className="h-[1px] bg-border" />
                    <div className="h-[1px] bg-border" />
                    <div className="h-[1px] bg-border" />
                    <div className="h-[1px] bg-border" />
                  </div>
                </div>

                <span>{member.year}</span>
              </div>
            )}
            <Fofo className="text-dark size-5" />
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
