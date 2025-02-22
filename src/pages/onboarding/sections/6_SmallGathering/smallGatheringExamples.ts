import { ObjectLocale } from "src/commonTypes";

interface SmallGatheringExample {
  id: number;
  title: ObjectLocale;
  description: ObjectLocale;
  image: string;
}

const LOGO_BASE_PATH = "src/pages/onboarding/sections/6_SmallGathering/assets";

const smallGatheringExamples: SmallGatheringExample[] = [
  {
    id: 0,
    title: {
      ko: "당구교실",
      en: "Billiard Class",
    },
    description: {
      ko: "당구 가르쳐주세요 선배",
      en: "Seniors, teach us how to play billiards",
    },
    image: LOGO_BASE_PATH + "/0.png",
  },
  {
    id: 1,
    title: {
      ko: "yarn-start",
      en: "yarn-start",
    },
    description: {
      ko: "뜨개질 할 사람 여기여기 모여라",
      en: "Calling all knitting enthusiasts!",
    },
    image: LOGO_BASE_PATH + "/1.png",
  },
  {
    id: 2,
    title: {
      ko: "마그마그",
      en: "MagMag",
    },
    description: {
      ko: "피그마로 재밌는 거 만들기",
      en: "Creating fun stuff with Figma",
    },
    image: LOGO_BASE_PATH + "/2.png",
  },
];

export default smallGatheringExamples;
