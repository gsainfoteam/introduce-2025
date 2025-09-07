import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout";
import OnboardingPage from "./pages/onboarding";
import FaqDetail from "./pages/qna/DetailFaq.tsx";
import { FaqLayout } from "./pages/qna/FaqLayout.tsx";
import QnA from "./pages/qna/FaqList.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<OnboardingPage />} />
      <Route element={<FaqLayout />}>
        <Route path="/faq" element={<QnA />} />
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
