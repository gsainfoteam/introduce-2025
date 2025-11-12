import { createContext, PropsWithChildren, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Member as StoreMember, members } from "src/store/members";

interface MemberWrapperProps extends PropsWithChildren {
  memberId: number;
}

interface Member {
  id: number;
  name: string;
  githubId: string;
  role: StoreMember["roles"];
  introduction: string;
  profileImage: string | null;
  intendedProjects: StoreMember["intendedProjects"];
}

const MemberContext = createContext<Member | null>(null);

const MemberWrapper = ({ memberId, children }: MemberWrapperProps) => {
  const { i18n } = useTranslation();

  // store에서 멤버 데이터 가져오기
  const storeMember = members.find((member) => member.id === memberId);

  if (!storeMember) return null;

  // 현재 언어에 맞게 변환
  const langKey = i18n.language === "ko-KR" ? "ko" : "en";
  const member: Member = {
    id: storeMember.id,
    name: storeMember.name[langKey],
    githubId: storeMember.githubID,
    role: storeMember.roles,
    introduction: storeMember.introduction[langKey],
    profileImage: storeMember.profileImage,
    intendedProjects: storeMember.intendedProjects,
  };

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
