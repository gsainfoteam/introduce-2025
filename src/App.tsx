import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout";
import OnboardingPage from "./pages/onboarding";
import Members from "./pages/members";
import QnA from "./pages/qna/FaqList.tsx";
import FaqDetail from "./pages/qna/DetailFaq.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<OnboardingPage />} />
      <Route path="/members" element={<Members />} />
      <Route element={<Layout />}></Route>
      <Route path="/faq" element={<QnA />} />
      <Route path="/faq/:id" element={<FaqDetail />} />
    </>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
