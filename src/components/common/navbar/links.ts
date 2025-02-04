import { ParseKeys } from "i18next";

interface NavLink {
  displayName: ParseKeys;
  link: string;
}

const links: NavLink[] = [
  {
    displayName: "navbar.aboutTeam",
    link: "/",
  },
  {
    displayName: "navbar.members",
    link: "/members",
  },
  {
    displayName: "navbar.projects",
    link: "/",
  },
  {
    displayName: "navbar.faq",
    link: "/",
  },
  {
    displayName: "navbar.bugReport",
    link: "/",
  },
];

export default links;
