import { useState } from "react";
import { H4 } from "src/components/common/headers";
import members, { Role, Member } from "../store/members";
import Modal from "./modal.tsx";

const roleLabels: Record<Role, string> = {
  [Role.Frontend]: "FE",
  [Role.Backend]: "BE",
  [Role.App]: "App",
  [Role.Designer]: "Designer",
  [Role.Manager]: "PM",
  [Role.DevOps]: "DevOps",
};

const roleStyles: Record<Role, { text: string; bg: string }> = {
  [Role.Frontend]: { text: "text-[#1B8FD7]", bg: "bg-[#CBE2F1]" },
  [Role.Backend]: { text: "text-[#D4A100]", bg: "bg-[#FFF3CD]" },
  [Role.App]: { text: "text-[#9B59B6]", bg: "bg-[#E8DAEF]" },
  [Role.Designer]: { text: "text-[#28A745]", bg: "bg-[#D4EDDA]" },
  [Role.Manager]: { text: "text-[#6C757D]", bg: "bg-[#E2E3E5]" },
  [Role.DevOps]: { text: "text-[#E74C3C]", bg: "bg-[#FADBD8]" },
};

const TEAM_LEADER_IDS = [14, 8, 5];

const MemberCard = ({ member }: { member: Member }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="w-[180px] h-[300px] bg-white rounded-lg flex flex-col p-4 border border-border cursor-pointer"
      onClick={handleCardClick}
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

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-lg font-bold mb-4">{member.name.ko}의 소개</h2>
        <p>{member.introduction?.ko}</p>
      </Modal>
    </div>
  );
};

const Members = () => {
  const teamLeaders = members.filter((member) =>
    TEAM_LEADER_IDS.includes(member.id),
  );
  const sortedLeaders = [...teamLeaders].sort((a, b) =>
    a.id === 14 ? -1 : b.id === 14 ? 1 : 0,
  );

  return (
    <div className="w-full flex flex-col items-center">
      {sortedLeaders.length > 0 && (
        <section className="content my-8">
          <div className="flex flex-col items-center">
            <H4>Team Leaders</H4>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {sortedLeaders.map((member) => (
              <MemberCard key={`leader-${member.id}`} member={member} />
            ))}
          </div>
        </section>
      )}
      {(
        [
          Role.Frontend,
          Role.Backend,
          Role.App,
          Role.Designer,
          Role.Manager,
          Role.DevOps,
        ] as Role[]
      ).map((role) => {
        const filteredMembers = members.filter(
          (member) =>
            member.roles.includes(role) && !TEAM_LEADER_IDS.includes(member.id),
        );
        if (filteredMembers.length === 0) return null;
        return (
          <section key={role} className="content my-8">
            <div className="flex flex-col items-center">
              <H4>{roleLabels[role]}</H4>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              {filteredMembers.map((member) => (
                <MemberCard key={`${role}-${member.id}`} member={member} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Members;
