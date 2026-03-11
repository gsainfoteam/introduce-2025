import { useTranslation } from "react-i18next";
import Footer from "src/components/common/footer";
import { H4 } from "src/components/common/headers";
import Navbar from "src/components/common/navbar";

import { Member, members, Role } from "../../store/members";
import MemberCard from "./MemberCard";
import { DEPUTY_TEAM_LEADER_IDS, roleLabels, TEAM_LEADER_IDS } from "./roles";

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
  const deputyTeamLeaders = members.filter((member) =>
    DEPUTY_TEAM_LEADER_IDS.includes(member.id),
  );

  const sortedLeaders = [...teamLeaders].sort((a, b) => {
    const priorityA = TEAM_LEADER_IDS.indexOf(a.id);
    const priorityB = TEAM_LEADER_IDS.indexOf(b.id);
    return priorityA - priorityB;
  });
  const sortedDeputyLeaders = [...deputyTeamLeaders].sort((a, b) => {
    const priorityA = DEPUTY_TEAM_LEADER_IDS.indexOf(a.id);
    const priorityB = DEPUTY_TEAM_LEADER_IDS.indexOf(b.id);
    return priorityA - priorityB;
  });
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 w-full z-10 content-wrapper">
        <Navbar mode="light" hasBackground={true} />
      </div>
      <div className="flex flex-col items-center content pb-16">
        <h1 className="py-[120px] text-6xl font-bold">
          {t("membersPage.title")}
        </h1>
        <div className="flex flex-col gap-44">
          {(sortedLeaders.length > 0 || sortedDeputyLeaders.length > 0) && (
            <section className="content my-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 items-stretch">
                {sortedLeaders.length > 0 && (
                  <div className="flex flex-col items-center h-full min-h-0">
                    <H4>{t("membersPage.teamLeaders")}</H4>
                    <div className="mt-4 flex-1 flex flex-col items-center w-full min-h-0">
                      {sortedLeaders.map((member) => (
                        <MemberCard
                          key={`leader-${member.id}`}
                          member={member}
                          className="h-full"
                        />
                      ))}
                    </div>
                  </div>
                )}
                {sortedDeputyLeaders.length > 0 && (
                  <div className="flex flex-col items-center h-full min-h-0">
                    <H4>{t("membersPage.deputyTeamLeaders")}</H4>
                    <div className="mt-4 flex-1 flex flex-col items-center w-full min-h-0">
                      {sortedDeputyLeaders.map((member) => (
                        <MemberCard
                          key={`deputy-${member.id}`}
                          member={member}
                          className="h-full"
                        />
                      ))}
                    </div>
                  </div>
                )}
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
      <Footer mode="light" />
    </div>
  );
};

export default Members;
