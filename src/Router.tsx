import { createBrowserRouter } from "react-router";
import { Onboarding } from "./pages";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Onboarding />,
  },
]);
