import { createBrowserRouter } from "react-router";
import { Main, MyBooks, Onboarding, Test1 } from "./pages";
import { AppLayout } from "./layout";
import Detail from "./pages/Detail";
import Read from "./pages/Read";
import { Test2 } from "./pages/test/Test2";

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
    path: "/test1/:id",
    element: <Test1 />,
  },
  {
    path: "/test2/:id",
    element: <Test2 />,
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
      {
        path: "/read/:id/:page",
        element: <Read />,
      },
    ],
  },
]);
