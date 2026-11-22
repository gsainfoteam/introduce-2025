# Infoteam 소개 사이트

GIST 정보통신 동아리 인포팀(Infoteam)을 소개하는 사이트입니다. <https://introduce.gistory.me>

## 기술 스택

| 영역                   | 사용 기술                                    |
| ---------------------- | -------------------------------------------- |
| 런타임 / 패키지 매니저 | [Bun](https://bun.sh)                        |
| UI                     | React 19 (+ React Compiler), TanStack Router |
| 빌드                   | Vite 8, TypeScript 6                         |
| 스타일                 | Tailwind CSS 4                               |
| 애니메이션             | GSAP (ScrollTrigger), Lottie                 |
| 상태 / i18n            | Jotai, i18next (ko-KR, en-US)                |
| 린트 / 포맷            | ESLint 10 (flat config), Prettier            |
| 시각 회귀 테스트       | Playwright                                   |

## 시작하기

```shell
bun install
bun run dev
```

| 명령어                            | 설명                                                                            |
| --------------------------------- | ------------------------------------------------------------------------------- |
| `bun run dev`                     | 개발 서버                                                                       |
| `bun run build`                   | 타입 검사 후 빌드 (`build/`). `VITE_MODE`로 모드 지정 (`staging`, `production`) |
| `bun run preview`                 | 빌드 결과 미리보기                                                              |
| `bun run lint`                    | ESLint                                                                          |
| `bun run format` / `format:check` | Prettier                                                                        |

## 환경 변수

`.env.development`, `.env.staging`, `.env.production`에서 `VITE_` 접두사 변수만 클라이언트에 노출됩니다. 타입은 `src/vite-env.d.ts`에 선언합니다.

## 디렉터리 구조

```text
src/
├── assets/            공용 정적 자원 (폰트, 로고, 아이콘)
├── components/common/ 공용 컴포넌트 (navbar, footer, headers 등)
├── locales/           i18n 리소스 (ko-KR, en-US)
├── pages/
│   ├── onboarding/    랜딩 페이지 (sections/ 아래에 섹션별로 분리)
│   ├── memberspage/   멤버 목록과 상세 모달
│   ├── faq/
│   └── projects/
├── router.tsx         TanStack Router 라우트 정의 (코드 기반, 랜딩 외 페이지는 lazy)
├── store/             Jotai atom, 멤버 데이터 (data.json)
├── types/             공용 타입, i18next 타입 선언
└── utils/
public/profiles/       멤버 프로필 이미지
```

- **멤버 추가/수정**: `src/store/data.json`과 `public/profiles/`를 수정합니다.
- **라우팅 동작**: 페이지 이동 시 스크롤 위치를 유지합니다(`resetScroll: false`). 기존 React Router 동작과 같게 하기 위함이며, 새 `Link`/`navigate`에도 똑같이 지정해야 합니다.
- **번역 추가**: `src/locales/*/main.json`의 키를 양쪽 언어에 같이 추가합니다. 빈 문자열(`""`)은 유효한 번역으로 취급합니다(`returnEmptyString`).

## 시각 회귀 테스트

리팩토링이나 의존성 업그레이드 시 화면이 바뀌지 않았는지 pixel 단위로 확인합니다.
4개 뷰포트(375/768/1280/1920) × 한국어/영어 × 전 페이지(온보딩 스크롤 구간별, FAQ, 프로젝트, 멤버 모달 포함)를 캡처합니다.

```shell
bunx playwright install chromium   # 최초 1회
bun run visual:baseline            # master 를 빌드해 기준 스냅샷 생성 (e2e/__snapshots__, git 무시)
bun run visual:test                # 현재 작업 트리를 빌드해 기준과 비교
```

- `visual:baseline [ref]`로 기준 커밋을 지정할 수 있습니다 (기본 `master`).
- 픽셀 diff 개수는 0으로 강제합니다. 픽셀당 색 허용 오차는 Chrome 래스터 노이즈(2/255 이하)만 흡수합니다 (`playwright.config.ts`).
- 외부 Google Fonts 요청은 결정성을 위해 테스트에서 차단합니다.

## 의존성 메모

- `lottie-react`는 2.x를 유지합니다. 3.x는 API가 바뀐 메이저입니다 (`useLottieInteractivity` 제거).
- `typescript`는 6.x입니다. `typescript-eslint`가 TS 7을 지원하면 올릴 수 있습니다.
- `eslint-plugin-react`는 ESLint 10과 호환되지 않아 제외했습니다. 훅 규칙은 `eslint-plugin-react-hooks`를 사용합니다.
