import { ObjectLocale } from "src/commonTypes";
import SmallGatheringIcon0 from "src/pages/onboarding/sections/6_SmallGathering/assets/0.png";
import SmallGatheringIcon1 from "src/pages/onboarding/sections/6_SmallGathering/assets/1.png";
import SmallGatheringIcon2 from "src/pages/onboarding/sections/6_SmallGathering/assets/2.png";

interface SmallGatheringExample {
  id: number;
  title: ObjectLocale;
  description: ObjectLocale;
  image: string;
}

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
    image: SmallGatheringIcon0,
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
    image: SmallGatheringIcon1,
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
    image: SmallGatheringIcon2,
  },
];

export default smallGatheringExamples;
