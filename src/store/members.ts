import { ObjectLocale } from "src/types/locale";

import data from "./data.json";

export enum Role {
  Frontend,
  Backend,
  App,
  Designer,
  Manager,
  DevOps,
  Education,
}

export type MemberStatus = "ACTIVE" | "GRADUATED" | "INACTIVE";

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
  status: MemberStatus;
}

export const members: Member[] = data.map((v) => ({
  ...v,
  status: ((v as { status?: MemberStatus }).status ?? "ACTIVE") as MemberStatus,
  profileImage: v.profileImage ? `/profiles/${v.profileImage}` : "/favicon.svg",
  roles: v.roles
    .map((r) => Role[r as keyof typeof Role])
    .filter((v) => v !== undefined),
  intendedProjects: v.intendedProjects.map((id) => ({
    projectId: id,
    role: [],
  })),
}));
