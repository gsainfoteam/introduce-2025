import { H4 } from "src/components/common/headers";
import members, { Role } from "../../store/members";
import MemberCard from "./MemberCard";
import { roleLabels, TEAM_LEADER_IDS } from "./roles";

const Members = () => {
  const teamLeaders = members.filter((member) =>
    TEAM_LEADER_IDS.includes(member.id),
  );

  const LEADER_PRIORITY = [14, 8, 5];

  const sortedLeaders = [...teamLeaders].sort((a, b) => {
    const priorityA = LEADER_PRIORITY.indexOf(a.id);
    const priorityB = LEADER_PRIORITY.indexOf(b.id);
    return priorityA - priorityB;
  });

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
