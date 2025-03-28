import { useState } from "react";
import { H4 } from "src/components/common/headers";
import members, { Role, Member } from "../../store/members";
import Modal from "./modal.tsx";
import { roleLabels, roleStyles, TEAM_LEADER_IDS } from "./roles.ts";

const MemberCard = ({ member }: { member: Member }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="w-[180px] h-[300px] bg-white rounded-lg flex flex-col p-4 border border-border cursor-pointer"
        onClickCapture={handleCardClick}
      >
        <img
          src={member.profileImage}
          alt={member.name.ko}
          className="w-full h-[150px] object-cover mb-4"
        />
        <h2 className="text-lg font-bold">{member.name.ko}</h2>
        {member.githubID && (
          <p className="text-sm text-blue-500 mt-1">
            <a
              href={`https://github.com/${member.githubID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @{member.githubID}
            </a>
          </p>
        )}
        <div className="flex flex-wrap gap-2 mt-3">
          {member.roles.map((r) => (
            <span
              key={r}
              className={`px-1 rounded-[4px] text-[14px] ${roleStyles[r].text} ${roleStyles[r].bg}`}
            >
              {roleLabels[r]}
            </span>
          ))}
        </div>
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleClose} member={member} />
      )}
    </>
  );
};

export default MemberCard;
