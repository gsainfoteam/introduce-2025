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
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 w-full z-10 content-wrapper">
        <Navbar mode="light" hasBackground={true} />
      </div>
      <div className="flex flex-col items-center content">
        <h1 className="py-[120px] text-6xl font-bold">
          {t("membersPage.title")}
        </h1>
        <div className="flex flex-col gap-44">
          {sortedLeaders.length > 0 && (
            <Section
              title={t("membersPage.teamLeaders")}
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
