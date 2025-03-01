import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout";
import OnboardingPage from "./pages/onboarding";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<OnboardingPage />} />
      <Route element={<Layout />}>
        {/* 여기 안에 Route를 정의하면 navbar가 알아서 붙음 */}
      </Route>
    </>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
