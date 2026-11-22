import {
  createRootRoute,
  createRoute,
  createRouter,
  lazyRouteComponent,
  Outlet,
} from "@tanstack/react-router";

import OnboardingPage from "./pages/onboarding";

const rootRoute = createRootRoute({ component: Outlet });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: OnboardingPage,
});

// 랜딩(온보딩)을 제외한 페이지는 라우트 단위로 코드 분할한다.
// 라우트 컴포넌트는 로드가 끝난 뒤 전환되므로 전환 중 빈 화면이 생기지 않는다.
const faqLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "faq-layout",
  validateSearch: (search: Record<string, unknown>) => ({
    type: typeof search.type === "string" ? search.type : undefined,
  }),
  component: lazyRouteComponent(() => import("./pages/faq"), "FaqLayout"),
});

const faqRoute = createRoute({
  getParentRoute: () => faqLayoutRoute,
  path: "/faq",
  component: lazyRouteComponent(() => import("./pages/faq"), "Faq"),
});

const faqDetailRoute = createRoute({
  getParentRoute: () => faqLayoutRoute,
  path: "/faq/$id",
  component: lazyRouteComponent(() => import("./pages/faq"), "FaqDetail"),
});

const membersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/members",
  component: lazyRouteComponent(() => import("./pages/memberspage/members")),
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: lazyRouteComponent(() => import("./pages/projects")),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  faqLayoutRoute.addChildren([faqRoute, faqDetailRoute]),
  membersRoute,
  projectsRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
