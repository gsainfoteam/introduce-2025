import { createBrowserRouter, RouterProvider } from "react-router";

import { Faq, FaqDetail, FaqLayout } from "./pages/faq";
import Members from "./pages/memberspage/members";
import OnboardingPage from "./pages/onboarding";
import Projects from "./pages/projects";

const router = createBrowserRouter([
  { path: "/", element: <OnboardingPage /> },
  {
    element: <FaqLayout />,
    children: [
      { path: "/faq", element: <Faq /> },
      { path: "/faq/:id", element: <FaqDetail /> },
    ],
  },
  { path: "/members", element: <Members /> },
  { path: "/projects", element: <Projects /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
