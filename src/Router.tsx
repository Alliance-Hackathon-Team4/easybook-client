import { createBrowserRouter } from "react-router";
import { Main, MyBooks, Onboarding } from "./pages";
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
        path: "/",
        element: <Main />,
      },
      {
        path: "/mybooks",
        element: <MyBooks />,
      },
    ],
  },
]);
