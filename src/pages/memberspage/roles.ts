import { Role } from "../../store/members";

export const TEAM_LEADER_IDS = [121];
export const DEPUTY_TEAM_LEADER_IDS = [24];

export const roleLabels: Record<Role, string> = {
  [Role.Frontend]: "FE",
  [Role.Backend]: "BE",
  [Role.App]: "App",
  [Role.Designer]: "Designer",
  [Role.Manager]: "PM",
  [Role.DevOps]: "DevOps",
  [Role.Education]: "Education",
};

export const roleStyles: Record<Role, { text: string; bg: string }> = {
  [Role.Frontend]: {
    text: "text-[#0F7BC7] border-[#9BCBDE]",
    bg: "bg-[#CBE2F1]",
  },
  [Role.Backend]: {
    text: "text-[#B8900E] border-[#E6C875]",
    bg: "bg-[#FFF3CD]",
  },
  [Role.App]: {
    text: "text-[#8348A3] border-[#C4A6D1]",
    bg: "bg-[#E8DAEF]",
  },
  [Role.Designer]: {
    text: "text-[#218838] border-[#A8D4B7]",
    bg: "bg-[#D4EDDA]",
  },
  [Role.Manager]: {
    text: "text-[#5A6268] border-[#BDC0C4]",
    bg: "bg-[#E2E3E5]",
  },
  [Role.DevOps]: {
    text: "text-[#DC3545] border-[#F1B5B8]",
    bg: "bg-[#FADBD8]",
  },
  [Role.Education]: {
    text: "text-[#16697A] border-[#A7C7CC]",
    bg: "bg-[#D1EFF3]",
  },
};
