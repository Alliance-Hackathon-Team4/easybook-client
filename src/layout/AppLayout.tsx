import { Outlet } from "react-router";
import { Header } from "../components";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="w-full mt-80px">
        <Outlet />
      </div>
    </>
  );
};
