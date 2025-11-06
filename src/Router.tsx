import { createBrowserRouter } from "react-router";
import { Onboarding } from "./pages";
import { AppLayout } from "./layout";

export const Router = createBrowserRouter([
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [],
  },
]);
