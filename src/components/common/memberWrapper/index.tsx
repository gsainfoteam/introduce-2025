import { createContext, PropsWithChildren, useContext } from "react";
import { useTranslation } from "react-i18next";
import { members as engMembers } from "src/locales/en-US";
import { members as korMembers } from "src/locales/ko-KR";
import { IntendedProjects, Role } from "src/store/members";

interface MemberWrapperProps extends PropsWithChildren {
  memberId: number;
}

interface Member {
  id: number;
  name: string;
  githubId: string;
  role: Role[];
  introduction: string;
  profileImage: string | null;
  intendedProjects: IntendedProjects[];
}

const MemberContext = createContext<Member | null>(null);

const MemberWrapper = ({ memberId, children }: MemberWrapperProps) => {
  const { i18n } = useTranslation();

  const members = i18n.language === "en-US" ? engMembers : korMembers;

  const member = members.find((member) => member.id === memberId);

  if (!member) return null;

  return (
    <MemberContext.Provider value={member}>{children}</MemberContext.Provider>
  );
};

export const useMember = () => {
  const context = useContext(MemberContext);
  if (!context) {
    throw new Error("useMember must be used within a MemberWrapper");
  }
  return context;
};

export default MemberWrapper;
