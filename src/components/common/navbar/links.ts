import { ParseKeys } from "i18next";

interface NavLink {
  displayName: ParseKeys;
  link?: string;
}

const links: NavLink[] = [
  {
    displayName: "navbar.aboutTeam",
    link: "/",
  },
  {
    displayName: "navbar.members",
  },
  {
    displayName: "navbar.projects",
  },
  {
    displayName: "navbar.faq",
  },
  {
    displayName: "navbar.bugReport",
    link: "https://cs.gistory.me/",
  },
];

export default links;
