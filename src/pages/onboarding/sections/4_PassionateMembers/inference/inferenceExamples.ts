import { ObjectLocale } from "src/commonTypes";

interface InferenceExample {
  id: number;
  title: ObjectLocale;
  presentersId: number[];
  description: ObjectLocale;
}

const inferenceExamples: InferenceExample[] = [
  {
    id: 0,
    title: {
      en: "How to Code Fast",
      ko: "How to Code Fast",
    },
    presentersId: [0],
    description: {
      en: "Let me show how to develop fast and flawlessly, using auto-completion, etc.",
      ko: "자동완성 등을 사용해서 개발을 빠르고 실수 없이 하는 방법을 알아봅시다.",
    },
  },
  {
    id: 1,
    title: {
      en: "XSS, CORS, CSP",
      ko: "XSS, CORS, CSP",
    },
    presentersId: [1],
    description: {
      en: "Let's learn about security vulnerabilities that can occur on the web and how to solve them.",
      ko: "웹 상에서 발생할 수 있는 보안 취약점과 이를 해결하는 방법을 알아봅시다.",
    },
  },
  {
    id: 2,
    title: {
      en: "Development Culture of Infoteam as Seen by Freshmen",
      ko: "신입생이 바라본 인포팀 개발 문화",
    },
    presentersId: [2],
    description: {
      en: "I would like to share the perspective of a new member who has just joined the Infoteam.",
      ko: "인포팀에 막 들어온 신규 부원의 시선을 공유해 보려고 합니다.",
    },
  },
];

export const getInferenceExamples = (lang: "ko" | "en") => {
  return inferenceExamples.map((example) => ({
    id: example.id,
    title: example.title[lang],
    presentersId: example.presentersId,
    description: example.description[lang],
  }));
};

export default inferenceExamples;
