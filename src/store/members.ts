import { ObjectLocale } from "src/commonTypes";

import data from "./data.json";

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
  year: number;
}

export const members: Member[] = data.map((v) => ({
  ...v,
  profileImage: v.profileImage ? `/profiles/${v.profileImage}` : "/favicon.svg",
  roles: v.roles
    .map((r) => Role[r as keyof typeof Role])
    .filter((v) => v !== undefined),
  intendedProjects: v.intendedProjects.map((id) => ({
    projectId: id,
    role: [],
  })),
}));
