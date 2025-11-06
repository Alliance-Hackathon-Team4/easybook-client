import { createBrowserRouter } from "react-router";
import { Onboarding } from "./pages";
import Detail from "./pages/Detail";
import { AppLayout } from "./layout";

export const Router = createBrowserRouter([
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [],
  },
]);
