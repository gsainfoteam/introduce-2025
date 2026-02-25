import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout";
import { Faq, FaqDetail, FaqLayout } from "./pages/faq";
import Members from "./pages/memberspage/members";
import OnboardingPage from "./pages/onboarding";
import Projects from "./pages/projects";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<OnboardingPage />} />
      <Route element={<FaqLayout />}>
        <Route path="/faq" element={<Faq />} />
        <Route path="/faq/:id" element={<FaqDetail />} />
      </Route>
      <Route path="/members" element={<Members />} />
      <Route path="/projects" element={<Projects />} />
      <Route element={<Layout />}></Route>
    </>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
