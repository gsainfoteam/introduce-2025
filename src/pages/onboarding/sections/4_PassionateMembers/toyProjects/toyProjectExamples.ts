interface ToyProject {
  id: number;
  title: {
    en: string;
    ko: string;
  };
  intendersId: number[];
  description: {
    en: string;
    ko: string;
  };
  thumbnail: string;
}

const THUMBNAIL_BASE_PATH =
  "src/pages/onboarding/sections/4_PassionateMembers/toyProjects/assets/examples";

const toyProjects: ToyProject[] = [
  {
    id: 0,
    title: {
      en: "Yacht Dice",
      ko: "요트다이스",
    },
    intendersId: [3, 4, 5],
    description: {
      en: "A Yacht Dice game made with React, inspired by 51 Worldwide Games!",
      ko: "리액트로 만들어본 51 WorldWide Games의 요트다이스!",
    },
    thumbnail: THUMBNAIL_BASE_PATH + "/0.png",
  },
  {
    id: 1,
    title: {
      en: "InfoPedia",
      ko: "인포피디아",
    },
    intendersId: [0],
    description: {
      en: "An internal wiki for our team intendersId' information... Rumor has it that you can even see hidden stories of the team intenders?!",
      ko: "우리 팀과 팀원들의 정보를 기록한 내부용 위키... 각 팀원의 숨겨진 흑역사까지 볼 수 있다는 소문이..?!",
    },
    thumbnail: THUMBNAIL_BASE_PATH + "/1.png",
  },
  {
    id: 2,
    title: {
      en: "Meeting Minutes Automation",
      ko: "회의록 자동화",
    },
    intendersId: [6, 7],
    description: {
      en: "A program that automatically extracts and writes meeting minutes from Hangul (.hwp) files submitted by students.",
      ko: "학생회 제출용 한글 파일 회의록을 노션으로부터 자동 추출/작성해주는 프로그램",
    },
    thumbnail: THUMBNAIL_BASE_PATH + "/2.png",
  },
  {
    id: 3,
    title: {
      en: "Funline Skating",
      ko: "빤라인 스케이팅",
    },
    intendersId: [8, 9, 10, 3],
    description: {
      en: "Enter a student ID and find the best 'Funline' (fastest path) in a fancy way!",
      ko: "학번을 입력하면 fancy하게 뻔선, 빤후를 찾아주는 서비스",
    },
    thumbnail: THUMBNAIL_BASE_PATH + "/3.png",
  },
  {
    id: 4,
    title: {
      en: "Infoteam Blog",
      ko: "인포팀 블로그",
    },
    intendersId: [11, 12],
    description: {
      en: "A blog where Infoteam shares detailed technical and cultural insights—because keeping them to ourselves would be a waste!",
      ko: "인포팀의 보다 자세한 기술/문화, 우리만 알고 있기엔 아까우니까",
    },
    thumbnail: THUMBNAIL_BASE_PATH + "/4.png",
  },
];

export default toyProjects;
