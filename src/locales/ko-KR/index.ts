import _members from "src/store/members";

export const main = {
  title: "안녕 세상아!",

  navbar: {
    aboutTeam: "팀 소개",
    members: "멤버",
    projects: "프로젝트",
    faq: "자주 묻는 질문",
    bugReport: "버그 제보",
  },

  onboarding: {
    introduction: {
      infoteamIs: "인포팀은",
      codeCampus: "코드로 캠퍼스를 바꾸는 사람들",
      descriptions: {
        one: "인포팀은 개발에 흥미를 가진 사람들이 지스트를 더 살기 좋고 재밌는 곳으로 만들기 위해 모인 팀입니다.",
        two: "누구는 정교한 코드를 짜는 게 재밌을수도, 누구는 예쁜 서비스를 만드는 게 재밌을수도, 누구는 사람들이 내 서비스를 많이 사용하는게 재밌을 수도 있습니다.",
        three:
          "저희는 이런 사람들이 모여 각자의 흥미에 따라 열심히 일하고 근사한 서비스를 만들어나가는 것을 목표로 합니다.",
      },
    },
    coolDevCulture: {
      asADevGroup: "개발 단체로써",
      leadsCool: "멋진 개발 문화를 이끌어 나갑니다.",
      slackGithubCollab: "Slack & Github 기반 협업",
    },
    passionateMembers: {
      title: "개발에 누구보다 진심인 팀원들",
      inference: {
        title: "인포팀 컨퍼런스, 인퍼런스",
        subtitle: "서로의 멋진 개발 경험을 공유하는 컨퍼런스-like 행사",
        inferenceLogo: "INFERENCE",
        description:
          "다른 프로젝트팀에 있어도 인퍼런스를 통해 어떤 개발을 하는지 공유합니다. <br /> 인퍼런스를 통해 인포팀원들은 새로운 기술적 영감을 얻기도 하고, 자신과는 다른 역할에서의 시각을 얻기도 합니다.",
        examples: [
          {
            title: "How to Code Fast",
            presenters: [_members[0]],
            description:
              "자동완성 등을 사용해서 개발을 빠르고 실수 없이 하는 방법을 알아봅시다.",
            link: "",
          },
        ],
      },
    },
  },
};

export const members = _members.map((member) => ({
  id: member.id,
  name: member.name.ko,
  githubId: member.githubID,
  role: member.roles,
  introduction: member.introduction.ko,
  profileImage: member.profileImage,
  intendedProjects: member.intendedProjects,
}));
