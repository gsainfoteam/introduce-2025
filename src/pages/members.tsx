import { H4, ShortHr } from "src/components/common/headers";
import members, { Member, Role } from "../store/members";

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

const teamLeaders = members.filter((member) => [14, 8, 5].includes(member.id));

const Members = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {teamLeaders.length > 0 && (
        <section className="w-full max-w-6xl my-8">
          <div className="flex flex-col items-center">
            <H4>Team Leaders</H4>
            <ShortHr />
          </div>

          <div className="grid lg:grid-cols-5 gap-6 mt-6 place-items-center">
            {teamLeaders.map((member) => (
              <div
                key={`leader-${member.id}`}
                className="w-[180px] h-[300px] bg-white rounded-lg flex flex-col p-4 border border-border"
              >
                <img
                  src={member.profileImage}
                  alt={member.name.ko}
                  className="w-[150px] h-[150px] object-cover mb-4 rounded-md justify-center"
                />
                <h2 className="text-lg font-bold text-left">
                  {member.name.ko}
                </h2>
                {member.githubID && (
                  <p className="text-sm text-blue-500 mt-1 text-left">
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
                <div className="flex flex-wrap gap-2 mt-3 justify-left">
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
            member.roles.includes(role) && ![14, 8, 5].includes(member.id),
        );

        if (filteredMembers.length === 0) return null;

        return (
          <section key={role} className="w-full max-w-6xl my-8">
            <div className="flex flex-col items-center">
              <H4>{roleLabels[role]}</H4>
              <ShortHr />
            </div>

            <div className="grid lg:grid-cols-5 gap-6 mt-6 place-items-center">
              {filteredMembers.map((member) => (
                <div
                  key={`${role}-${member.id}`}
                  className="w-[180px] h-[300px] bg-white rounded-lg flex flex-col p-4 border border-border"
                >
                  <img
                    src={member.profileImage}
                    alt={member.name.ko}
                    className="w-full h-[150px] object-cover mb-4 rounded-md"
                  />
                  <h2 className="text-lg font-bold text-center">
                    {member.name.ko}
                  </h2>
                  {member.githubID && (
                    <p className="text-sm text-blue-500 mt-1 text-center">
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
                  <div className="flex flex-wrap gap-2 mt-3 justify-center">
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
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Members;
