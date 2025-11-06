import { createBrowserRouter } from "react-router";
import { Main, MyBooks, Onboarding } from "./pages";
import { AppLayout } from "./layout";
import Detail from "./pages/Detail";
import Read from "./pages/Read";

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
      {
        path: "/read/:id",
        element: <Read />,
      },
    ],
  },
]);
