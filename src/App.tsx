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
import OnboardingPage from "./pages/onboarding";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<OnboardingPage />} />
      <Route element={<FaqLayout />}>
        <Route path="/faq" element={<Faq />} />
        <Route path="/faq/:id" element={<FaqDetail />} />
      </Route>
      <Route element={<Layout />}></Route>
    </>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
