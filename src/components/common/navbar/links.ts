import { ParseKeys } from "i18next";

export type NavLink = { displayName: ParseKeys } & (
  { to: "/" | "/members" | "/projects" | "/faq" } | { href: string }
);

const links: NavLink[] = [
  {
    displayName: "navbar.aboutTeam",
    to: "/",
  },
  {
    displayName: "navbar.members",
    to: "/members",
  },
  {
    displayName: "navbar.projects",
    to: "/projects",
  },
  {
    displayName: "navbar.faq",
    to: "/faq",
  },
  {
    displayName: "navbar.bugReport",
    href: "https://cs.gistory.me/",
  },
];

export default links;
