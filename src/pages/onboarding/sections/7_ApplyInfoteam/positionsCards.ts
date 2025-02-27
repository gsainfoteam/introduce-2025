import { ObjectLocale } from "src/commonTypes";

interface PositionCard {
  title: string;
  subtitle: string;
  description: ObjectLocale;
  bgColor: string;
  link?: string;
}

const positionCards: PositionCard[] = [
  {
    title: "DEV INTERN",
    subtitle: "Developers' Internship Course",
    description: {
      ko: "개발을 몰라도 <br />처음부터 시작해 나가는 인턴십",
      en: "An internship program where you can start from scratch <br /> even without dev experience",
    },
    bgColor: "#FF46A2",
  },
  {
    title: "DEV SPECIAL",
    subtitle: "Developers' Special Recruitment",
    description: {
      ko: "중급 이상의 개발 경험 <br />인턴십 없이 즉시 고용",
      en: "Intermediate dev experience <br />Immediate hire without internship",
    },
    bgColor: "#46FF77",
  },
  {
    title: "DESIGNER",
    subtitle: "Experienced Designer's Recruitment",
    description: {
      ko: "경험 있는 디자이너",
      en: "Experienced designer",
    },
    bgColor: "#FFE346",
  },
];

export default positionCards;
