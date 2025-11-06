import { createBrowserRouter } from "react-router";
import { Onboarding } from "./pages";
import Detail from "./pages/Detail";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Onboarding />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);
