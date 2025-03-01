import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout";
import OnboardingPage from "./pages/onboarding";
import Members from "./pages/members";
import QnA from "./pages/qna/QnA.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<OnboardingPage />} />
      <Route path="/members" element={<Members />} />
      <Route element={<Layout />}></Route>
      <Route path="/faq" element={<QnA />} />
    </>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
