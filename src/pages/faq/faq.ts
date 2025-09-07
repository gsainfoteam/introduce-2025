import { ObjectLocale } from "src/commonTypes";

interface faqdetail {
  id: number;
  title: ObjectLocale;
  description: ObjectLocale;
  category: string;
}

const faqdetails: faqdetail[] = [
  {
    id: 1,
    title: {
      en: "What is Mission Infossible?",
      ko: "인포서블이 무엇인가요?",
    },
    description: {
      en: "Infossible is the recruitment process for joining Infoteam, where you will acquire the necessary development knowledge.",
      ko: "인포서블은 인포팀에 가입하기 위한 모집 과정으로, 개발에 필요한 지식을 습득할 수 있습니다.",
    },
    category: "recruitment",
  },
  {
    id: 2,
    title: {
      en: "Can I join without development experience?",
      ko: "개발 경험이 전혀 없어도 가입할 수 있나요?",
    },
    description: {
      en: "Yes, you can. Starting with Infossible, the recruitment process for the infoteam, you can gain the knowledge you need to develop. After the selection, we run an onboarding program where you will receive basic program language training and learn how to use various tools . After the basic seminar, we also have a mentoring system where you can ask questions and get answers to anything you don't understand.",
      ko: "네! 가능합니다! 인포팀 모집과정인 인포서블에서부터 여러분은 개발에 필요한 지식을 습득할 수 있습니다. 선발 이후에는 온보딩 프로그램을 운영하여, 언어 기초 교육을 받고 여러 도구 사용 방법을 배울 수 있습니다. 또한 기본 세미나 이후에는 멘토링 시스템이 운영 되어, 모르는 것을 편하게 질문하고 답변 받을 수 있습니다.",
    },
    category: "recruitment",
  },
  {
    id: 3,
    title: {
      en: "How are regular meetings conducted in Infoteam?",
      ko: "인포팀 정기 모임은 어떻게 진행되나요?",
    },
    description: {
      en: "There is an all-hands meeting once a week to share overall project progress and discuss any other issues that come up. Additionally, each project team meets once a week. We don't do any formal activities until two to three weeks before the exam period.",
      ko: "우선 일주일에 한번 전체 모임이 있으며, 이 때 전체적인 프로젝트 진행 상황을 공유하거나 기타 논의 사항에 대한 토의가 이루어집니다. 그 외에는 각 프로젝트 팀마다 일주일에 한번씩 회의를 합니다. 시험기간 2~3주 전에는 공식적인 활동을 하지 않습니다.",
    },
    category: "recruitment",
  },
  {
    id: 4,
    title: {
      en: "What technology stack is used in projects?",
      ko: "프로젝트 참여 시 어떤 기술 스택을 사용하나요?",
    },
    description: {
      en: "The tech stack of the Info team is as follows\nFrontend: Typescript, React\nBackend: NestJS\nDatabase: PostgreSQL\nVirtual Containers: Docker, Kubernetes (k3s)\nVCS: Git, Github\nRecords: Notion.",
      ko: "인포팀의 기술 스택은 다음과 같습니다\n프론트엔드: Typescript, React\n백엔드: NestJS\n데이터베이스: PostgreSQL\n 가상 컨테이너: Docker, Kubernetes(k3s)\nVCS: Git, Github\n기록: Notion.",
    },
    category: "recruitment",
  },
  {
    id: 5,
    title: {
      en: "Is it difficult to balance academics and Infoteam activities?",
      ko: "학업과 병행하기에 부담스러운 일정은 아닌가요?",
    },
    description: {
      en: "There are no formal activities during the exam period, so if you want to do something, you can find something you like to do, but it's not compulsory. However, if you are involved in multiple clubs and societies, it can be a bit overwhelming, so please consider this before applying.",
      ko: "시험기간에는 공식적인 활동을 하지 않습니다. 만약에 활동을 원한다면 스스로 하고 싶은 것을 찾아서 해도 되지만, 의무는 아닙니다. 그러나 여러 동아리활동과 함께 한다면, 조금 부담스러울 수도 있으니 지원 이전 이 점 고려하시면 좋겠습니다.",
    },
    category: "recruitment",
  },
  {
    id: 6,
    title: {
      en: "What kind of growth can be expected through Infoteam activities?",
      ko: "인포팀 활동을 통해 어떤 실질적인 성장을 기대할 수 있나요?",
    },
    description: {
      en: "We want you to be able to experience the full cycle of a project, and if you follow our training, you should be able to easily create your own projects on your own. These experiences can be used as a portfolio for future employment, and they will also help you grow your problem-solving and development skills.",
      ko: "인포팀의 여러 프로젝트 경험을 통해 프로젝트의 전 과정을 체득할 수 있습니다. 또한, 인포팀 내의 교육을 잘 따라오기만 한다면 혼자서 원하는 프로젝트를 만드는 것 정도는 쉽게 할 수 있는 능력을 길러 주고자 합니다. 이러한 경험들은 추후 취업 준비 시 포트폴리오가 될 수 도 있고, 이 외에도 문제 해결 능력, 개발 실력을 성장시킬 수 있는 발판이 될 것입니다.",
    },
    category: "recruitment",
  },
  {
    id: 7,
    title: {
      en: "What is the process if I get accepted into Infoteam?",
      ko: "인포팀 지원에 합격하면 어떤 과정을 밟게 되나요?",
    },
    description: {
      en: "The process for developers and designers after acceptance will include onboarding, training sessions, and team integration.",
      ko: "개발자와 디자이너가 합격하면 온보딩, 교육 세션, 그리고 팀 통합 과정이 포함됩니다.",
    },
    category: "recruitment",
  },
  {
    id: 8,
    title: {
      en: "Service - Writing a post",
      ko: "서비스 - 글 작성",
    },
    description: {
      en: "Ziggle > I want to write a post.",
      ko: "지글 > 글을 작성하고 싶어요.",
    },
    category: "service",
  },
  {
    id: 9,
    title: {
      en: "Service - Editing a post",
      ko: "서비스 - 글 수정",
    },
    description: {
      en: "Ziggle > I want to edit a post.",
      ko: "지글 > 글을 수정하고 싶어요.",
    },
    category: "service",
  },
  {
    id: 10,
    title: {
      en: "Service - Unable to write a post",
      ko: "서비스 - 글 작성이 되지 않아요",
    },
    description: {
      en: "Ziggle > I can't write a post.",
      ko: "지글 > 글 작성이 되지 않아요.",
    },
    category: "service",
  },
];

export default faqdetails;
