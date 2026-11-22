import { createBrowserRouter, RouterProvider } from "react-router";

import OnboardingPage from "./pages/onboarding";

// 랜딩(온보딩)을 제외한 페이지는 라우트 단위로 코드 분할한다.
// `lazy` 라우트는 로드가 끝날 때까지 이전 화면을 유지하므로 전환 중 빈 화면이 생기지 않는다.
const router = createBrowserRouter([
  { path: "/", element: <OnboardingPage /> },
  {
    lazy: async () => ({
      Component: (await import("./pages/faq")).FaqLayout,
    }),
    children: [
      {
        path: "/faq",
        lazy: async () => ({
          Component: (await import("./pages/faq")).Faq,
        }),
      },
      {
        path: "/faq/:id",
        lazy: async () => ({
          Component: (await import("./pages/faq")).FaqDetail,
        }),
      },
    ],
  },
  {
    path: "/members",
    lazy: async () => ({
      Component: (await import("./pages/memberspage/members")).default,
    }),
  },
  {
    path: "/projects",
    lazy: async () => ({
      Component: (await import("./pages/projects")).default,
    }),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
