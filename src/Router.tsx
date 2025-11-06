import { createBrowserRouter } from "react-router";
import { MyBooks, Onboarding } from "./pages";
import { AppLayout } from "./layout";

export const Router = createBrowserRouter([
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/mybooks",
        element: <MyBooks />,
      },
    ],
  },
]);
