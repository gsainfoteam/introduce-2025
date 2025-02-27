import { ObjectLocale } from "src/commonTypes";

export interface Project {
  id: number;
  name: ObjectLocale;
  bannerImg: string;
  term: string;
  description: ObjectLocale;
}

const projects: Project[] = [
  {
    id: 0,
    name: {
      en: "Ziggle",
      ko: "지글",
    },
    bannerImg: "",
    term: "2023.02 ~",
    description: {
      en: "blabla",
      ko: "어쩌구저쩌구",
    },
  },
];

export default projects;
