import { createBrowserRouter } from "react-router";
import { Main, MyBooks, Onboarding } from "./pages";
import { AppLayout } from "./layout";
import Detail from "./pages/Detail";

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
