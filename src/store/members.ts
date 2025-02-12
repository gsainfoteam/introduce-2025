import { ObjectLocale } from "src/commonTypes";

export enum Role {
  Frontend,
  Backend,
  App,
  Designer,
  Manager,
  DevOps,
}

interface IntendedProjects {
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
];

export default members;
