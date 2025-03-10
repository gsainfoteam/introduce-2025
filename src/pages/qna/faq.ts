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
      en: "What is Infoseble?",
      ko: "인포서블이 무엇인가요?",
    },
    description: {
      en: "Infoseble is the recruitment process for joining Infoteam, where you will acquire the necessary development knowledge.",
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
      en: "Yes! It's possible! Infoseble starts with teaching the basics of development, and after selection, you'll undergo onboarding with language training and tool usage instructions.",
      ko: "네! 가능합니다! 인포서블에서부터 여러분은 개발에 필요한 기초 교육을 받고, 선발 이후에는 온보딩 프로그램을 통해 언어 교육과 도구 사용법을 배울 수 있습니다.",
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
      en: "There is a general meeting once a week to share progress and discuss other matters. Each project team also holds weekly meetings.",
      ko: "일주일에 한번 전체 모임이 있으며, 이 때 전체적인 프로젝트 진행 상황을 공유하거나 기타 논의 사항에 대한 토의가 이루어집니다.",
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
      en: "Infoteam uses the following technology stack: Frontend - Typescript, React; Backend - NestJS; Database - PostgreSQL; Containerization - Docker, Kubernetes (k3s); VCS - Git, Github; Documentation - Notion.",
      ko: "인포팀의 기술 스택은 다음과 같습니다: 프론트엔드 개발: **Typescript, React**; 백엔드 개발: **NestJS**; 데이터베이스: **PostgreSQL**; 가상 컨테이너: **Docker, Kubernetes(k3s)**; VCS: **Git, Github**; **Documentation**: Notion.",
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
      en: "Official activities are paused during exam periods. If you wish to continue, you can work on personal projects, but it's not mandatory. However, if you participate in multiple activities, it might feel a bit burdensome.",
      ko: "시험기간에는 공식적인 활동을 하지 않습니다. 활동을 원한다면 스스로 하고 싶은 것을 찾아서 해도 되지만, 의무는 아닙니다. 여러 동아리 활동과 함께 한다면, 조금 부담스러울 수 있습니다.",
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
      en: "Through Infoteam projects, you will experience the entire process and learn to create your own projects. These experiences can become a portfolio for future job searches and help improve problem-solving and development skills.",
      ko: "인포팀의 여러 프로젝트 경험을 통해 프로젝트의 전 과정을 체득할 수 있습니다. 또한, 이 경험들은 추후 취업 준비 시 포트폴리오가 될 수 있으며, 문제 해결 능력과 개발 실력을 향상시킬 수 있는 기회를 제공합니다.",
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
