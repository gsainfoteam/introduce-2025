import { useTranslation } from "react-i18next";
import { H4 } from "src/components/common/headers";
import Navbar from "src/components/common/navbar";

import { Member, members, Role } from "../../store/members";
import MemberCard from "./MemberCard";
import { roleLabels, TEAM_LEADER_IDS } from "./roles";

const Section = ({ title, members }: { title: string; members: Member[] }) => {
  return (
    <section className="content my-8">
      <div className="flex flex-col items-center">
        <H4>{title}</H4>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {members.map((member) => (
          <MemberCard key={`leader-${member.id}`} member={member} />
        ))}
      </div>
    </section>
  );
};

const Members = () => {
  const teamLeaders = members.filter((member) =>
    TEAM_LEADER_IDS.includes(member.id),
  );

  const sortedLeaders = [...teamLeaders].sort((a, b) => {
    const priorityA = TEAM_LEADER_IDS.indexOf(a.id);
    const priorityB = TEAM_LEADER_IDS.indexOf(b.id);
    return priorityA - priorityB;
  });
  const { i18n } = useTranslation();

  return (
    <div className="w-full">
      <Navbar mode="light" hasBackground={true} />
      <div className="flex flex-col items-center content">
        <h1 className="py-[120px] text-6xl font-bold">
          {i18n.language === "ko-KR" ? "멤버" : "Members"}
        </h1>
        <div className="flex flex-col gap-44">
          {sortedLeaders.length > 0 && (
            <Section
              title={i18n.language === "ko-KR" ? "팀장" : "Team Leaders"}
              members={sortedLeaders}
            />
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
            const filteredMembers = members.filter((member) =>
              member.roles.includes(role),
            );
            if (filteredMembers.length === 0) return null;
            return (
              <Section
                key={role}
                title={roleLabels[role]}
                members={filteredMembers}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Members;
