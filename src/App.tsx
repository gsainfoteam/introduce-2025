import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout";
import FaqDetail from "./pages/faq/DetailFaq.tsx";
import { FaqLayout } from "./pages/faq/FaqLayout.tsx";
import Faq from "./pages/faq/FaqList.tsx";
import Members from "./pages/memberspage/members";
import OnboardingPage from "./pages/onboarding";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<OnboardingPage />} />
      <Route element={<FaqLayout />}>
        <Route path="/faq" element={<Faq />} />
        <Route path="/faq/:id" element={<FaqDetail />} />
      </Route>
      <Route path="/members" element={<Members />} />
      <Route element={<Layout />}></Route>
    </>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
