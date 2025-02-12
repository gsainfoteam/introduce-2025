import { ObjectLocale } from "src/commonTypes";

import projects, { Project } from "./projects";

export enum Role {
  Frontend,
  Backend,
  App,
  Designer,
  Manager,
  DevOps,
}

interface IntendedProjects {
  project: Project;
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
        project: projects[0],
        role: [Role.Backend, Role.Frontend, Role.App, Role.DevOps],
      },
    ],
  },
];

export default members;
