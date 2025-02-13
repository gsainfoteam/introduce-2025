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
    profileImage: "https://avatars.githubusercontent.com/u/125528915?v=4",
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
      en: "Yebeen Lee",
      ko: "이예빈",
    },
    githubID: "yebeen23",
    roles: [Role.Frontend],
    introduction: {
      en: "yebeen introduction",
      ko: "예빈 설명",
    },
    profileImage: "https://avatars.githubusercontent.com/u/126765312?v=4",
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
      en: "Ikjun Choi",
      ko: "최익준",
    },
    githubID: "no_ikjun",
    roles: [Role.Backend],
    introduction: {
      en: "ikjun introduction",
      ko: "익준 설명",
    },
    profileImage: "https://avatars.githubusercontent.com/u/96350366?v=4",
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
      en: "Yejin Yang",
      ko: "양예진",
    },
    githubID: "",
    roles: [Role.Frontend, Role.Designer],
    introduction: {
      en: "yejin introduction",
      ko: "예진 설명",
    },
    profileImage: "",
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
      en: "Jonghyun Kim",
      ko: "김종현",
    },
    githubID: "",
    roles: [Role.Frontend],
    introduction: {
      en: "jonghyun introduction",
      ko: "종현 설명",
    },
    profileImage: "",
    intendedProjects: [],
  },
  {
    id: 5,
    name: {
      en: "Jeongwoo Lee",
      ko: "이정우",
    },
    githubID: "crown-3",
    roles: [Role.Frontend, Role.Designer],
    introduction: {
      en: "jeongwoo introduction",
      ko: "정우 설명",
    },
    profileImage: "",
    intendedProjects: [],
  },
  {
    id: 6,
    name: {
      en: "Huigyung Son",
      ko: "손희경",
    },
    githubID: "",
    roles: [Role.Frontend],
    introduction: {
      en: "huigyung introduction",
      ko: "희경 설명",
    },
    profileImage: "",
    intendedProjects: [],
  },
  {
    id: 7,
    name: {
      en: "Inseon Hwang",
      ko: "황인선",
    },
    githubID: "",
    roles: [Role.Frontend],
    introduction: {
      en: "inseon introduction",
      ko: "인선 설명",
    },
    profileImage: "",
    intendedProjects: [],
  },
  {
    id: 8,
    name: {
      en: "Sunghwan Kim",
      ko: "김성환",
    },
    githubID: "",
    roles: [Role.Backend],
    introduction: {
      en: "sunghwan introduction",
      ko: "성환 설명",
    },
    profileImage: "",
    intendedProjects: [],
  },
  {
    id: 9,
    name: {
      en: "Dongyeon Ahn",
      ko: "안동연",
    },
    githubID: "",
    roles: [Role.App],
    introduction: {
      en: "dongyeon introduction",
      ko: "동연 설명",
    },
    profileImage: "",
    intendedProjects: [],
  },
  {
    id: 10,
    name: {
      en: "Dahyun Oh",
      ko: "오다현",
    },
    githubID: "",
    roles: [Role.Backend],
    introduction: {
      en: "dahyun introduction",
      ko: "다현 설명",
    },
    profileImage: "",
    intendedProjects: [],
  },
  {
    id: 11,
    name: {
      en: "Shinhyuk Lee",
      ko: "이신혁",
    },
    githubID: "",
    roles: [Role.App, Role.Backend],
    introduction: {
      en: "shinhyuk introduction",
      ko: "신혁 설명",
    },
    profileImage: "",
    intendedProjects: [],
  },
  {
    id: 12,
    name: {
      en: "Jinseo Shim",
      ko: "심진서",
    },
    githubID: "",
    roles: [Role.Frontend],
    introduction: {
      en: "jinseo introduction",
      ko: "진서 설명",
    },
    profileImage: "",
    intendedProjects: [],
  },
];

export default members;
