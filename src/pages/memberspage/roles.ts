import { Role } from "../../store/members";

export const TEAM_LEADER_IDS = [14, 8, 5];

export const roleLabels: Record<Role, string> = {
  [Role.Frontend]: "FE",
  [Role.Backend]: "BE",
  [Role.App]: "App",
  [Role.Designer]: "Designer",
  [Role.Manager]: "PM",
  [Role.DevOps]: "DevOps",
};

export const roleStyles: Record<Role, { text: string; bg: string }> = {
  [Role.Frontend]: { text: "text-[#1B8FD7]", bg: "bg-[#CBE2F1]" },
  [Role.Backend]: { text: "text-[#D4A100]", bg: "bg-[#FFF3CD]" },
  [Role.App]: { text: "text-[#9B59B6]", bg: "bg-[#E8DAEF]" },
  [Role.Designer]: { text: "text-[#28A745]", bg: "bg-[#D4EDDA]" },
  [Role.Manager]: { text: "text-[#6C757D]", bg: "bg-[#E2E3E5]" },
  [Role.DevOps]: { text: "text-[#E74C3C]", bg: "bg-[#FADBD8]" },
};
