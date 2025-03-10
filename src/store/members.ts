import { ObjectLocale } from "src/commonTypes";

export enum Role {
  Frontend,
  Backend,
  App,
  Designer,
  Manager,
  DevOps,
}

export interface IntendedProjects {
  projectId: number;
  role: Role[];
}

export interface Member {
  id: number;
  name: ObjectLocale;
  githubID: string;
  roles: Role[];
  introduction: ObjectLocale;
  profileImage: string;
  intendedProjects: IntendedProjects[];
}

const members: Member[] = [
  {
    id: 0,
    name: {
      en: "Boseong Lee",
      ko: "이보성",
    },
    githubID: "2paperstar",
    roles: [Role.Frontend, Role.DevOps, Role.Backend],
    introduction: {
      en: "boseong introduction",
      ko: "보성 설명",
    },
    profileImage: "../../src/assets/pic/이보성.jpg",
    intendedProjects: [
      {
        projectId: 0,
        role: [Role.Backend, Role.Frontend, Role.App, Role.DevOps],
      },
    ],
  },
  {
    id: 1,
    name: {
      en: "Ganghyeon Seo",
      ko: "서강현",
    },
    githubID: "ganghyeonseo",
    roles: [Role.Frontend],
    introduction: {
      en: "Currently responsible for backend development and infrastructure.",
      ko: "백엔드 개발과 인프라를 담당하고 있습니다.",
    },
    profileImage: "https://avatars.githubusercontent.com/u/48593646?v=4",
    intendedProjects: [
      {
        projectId: 0,
        role: [Role.Frontend],
      },
    ],
  },
  {
    id: 2,
    name: {
      en: "Daneun Kim",
      ko: "김단은",
    },
    githubID: "chungjung-d",
    roles: [Role.Backend, Role.Frontend, Role.DevOps],
    introduction: {
      en: "Currently responsible for frontend, backend, and devops.",
      ko: "프론트엔드, 백엔드 그리고 데브옵스를 담당하고 있습니다.",
    },
    profileImage: "https://avatars.githubusercontent.com/u/63407866?v=4",
    intendedProjects: [
      {
        projectId: 0,
        role: [Role.Backend],
      },
    ],
  },
  {
    id: 3,
    name: {
      en: "Jengwoo Lee",
      ko: "이정우",
    },
    githubID: "crown-3",
    roles: [Role.Frontend, Role.Designer],
    introduction: {
      en: "yejin introduction",
      ko: "예진 설명",
    },
    profileImage: "https://avatars.githubusercontent.com/u/57053429?v=4",
    intendedProjects: [
      {
        projectId: 0,
        role: [Role.Frontend, Role.Designer],
      },
    ],
  },
  {
    id: 4,
    name: {
      en: "Siwon Park",
      ko: "박시원",
    },
    githubID: "siwonpada",
    roles: [Role.Backend, Role.DevOps],
    introduction: {
      en: "Someone who is responsible for backend/infrastructure on the infoteam project.",
      ko: "인포팀에서 벡엔드/인프라를 맡고있는 사람.",
    },
    profileImage: "../../src/assets/pic/박시원.tiff",
    intendedProjects: [],
  },
  {
    id: 5,
    name: {
      en: "Dahyeon Oh",
      ko: "오다현",
    },
    githubID: "controlZ",
    roles: [Role.Backend, Role.DevOps],
    introduction: {
      en: "I am in charge of backend development and infrastructure in Infoteam. Also, I struggle for the friendship and content of Infoteam.",
      ko: "인포팀에서 백엔드 개발과 인프라를 담당하고 있으며, 인포팀의 친목과 컨텐츠를 위해 고군분투합니다.",
    },
    profileImage: "https://avatars.githubusercontent.com/u/101192718?v=4",
    intendedProjects: [],
  },
  {
    id: 6,
    name: {
      en: "Yejin Yang",
      ko: "양예진",
    },
    githubID: "Yejin-02",
    roles: [Role.Frontend, Role.Designer],
    introduction: {
      en: "I am in charge of frontend and design in the Infoteam",
      ko: "인포팀에서 프론트엔드와 디자인을 맡고 있습니다",
    },
    profileImage: "https://avatars.githubusercontent.com/u/110380670?v=4",
    intendedProjects: [],
  },
  {
    id: 7,
    name: {
      en: "Inseon Hwang",
      ko: "최홍제",
    },
    githubID: "enc2586",
    roles: [Role.Frontend, Role.Backend],
    introduction: {
      en: "I am in charge of frontend and backend in the Infoteam",
      ko: "인포팀에서 프론트엔드와 백엔드를 맡고 있습니다.",
    },
    profileImage: "https://avatars.githubusercontent.com/u/85762538?v=4",
    intendedProjects: [],
  },
  {
    id: 8,
    name: {
      en: "Shim Jinseo",
      ko: "심진서",
    },
    githubID: "SHIM-JINSEO",
    roles: [Role.Frontend],
    introduction: {
      en: "I’m a front-end developer hustling in the info team.",
      ko: "인포팀에서 열심히 구르고 있는 프엔 개발자입니다.",
    },
    profileImage: "https://avatars.githubusercontent.com/u/90755177?v=4",
    intendedProjects: [],
  },
  {
    id: 9,
    name: {
      en: "Dongyeon Ahn",
      ko: "안동연",
    },
    githubID: "GwanLiZa",
    roles: [Role.App],
    introduction: {
      en: "I'm the weakest people in the infoteam. I'm working towards becoming a full-stack developer.",
      ko: "인포팀에서 최약체를 담당하고 있습니다. 풀스택 개발자를 목표로 노력하고 있습니다.",
    },
    profileImage: "../../src/assets/pic/안동연.jpg",
    intendedProjects: [],
  },
  {
    id: 10,
    name: {
      en: "Dahyun Oh",
      ko: "윤소율",
    },
    githubID: "ysym1208",
    roles: [Role.Backend],
    introduction: {
      en: "I am in charge of backend in the Infoteam.",
      ko: "인포팀에서 백엔드를 맡고 있습니다.",
    },
    profileImage: "https://avatars.githubusercontent.com/u/162329866?v=4",
    intendedProjects: [],
  },
  {
    id: 11,
    name: {
      en: "Shinhyuk Lee",
      ko: "임정은",
    },
    githubID: "",
    roles: [Role.Designer, Role.Frontend],
    introduction: {
      en: "I am in charge of frontend and design in the Infoteam",
      ko: "인포팀에서 프론트엔드와 디자인을 맡고 있습니다",
    },
    profileImage: "https://avatars.githubusercontent.com/u/162328957?v=4",
    intendedProjects: [],
  },
  {
    id: 12,
    name: {
      en: "SungHwan Kim",
      ko: "김성환",
    },
    githubID: "kshmaker",
    roles: [Role.Backend],
    introduction: {
      en: "Actually, I'm a mechanical engineering major.",
      ko: "인포팀에서 백엔드를 맡고 있습니다",
    },
    profileImage: "https://avatars.githubusercontent.com/u/160876904?v=4",
    intendedProjects: [],
  },
  {
    id: 13,
    name: {
      en: "Semin Han",
      ko: "한세민",
    },
    githubID: "han299792",
    roles: [Role.Backend],
    introduction: {
      en: "I am Backend Developer in Infoteam,",
      ko: "인포팀에서 백엔드를 맡고 있습니다.",
    },
    profileImage: "https://avatars.githubusercontent.com/u/155029954?v=4",
    intendedProjects: [],
  },
  {
    id: 14,
    name: {
      en: "LEE SHIN HYEOK",
      ko: "이신혁",
    },
    githubID: "dawnfire05",
    roles: [Role.Backend, Role.App, Role.Designer],
    introduction: {
      en: "I am Shin Hyeok Lee, the InfoTeam Leader for the year 2025.",
      ko: "25년도 인포팀장 이신혁입니다.",
    },
    profileImage: "../../src/assets/pic/이신혁.jpg",
    intendedProjects: [],
  },
  {
    id: 15,
    name: {
      en: "Seo Eun Won",
      ko: "서은원",
    },
    githubID: "seoeunwon",
    roles: [Role.Designer],
    introduction: {
      en: "I am designer of the Infoteam.",
      ko: "인포팀에서 디자인을 맡고 있습니다.",
    },
    profileImage: "https://avatars.githubusercontent.com/u/125674335?v=4",
    intendedProjects: [],
  },
];

export default members;
