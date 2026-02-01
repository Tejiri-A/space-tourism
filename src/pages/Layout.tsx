import { Outlet } from "react-router";
import Header from "../components/Header.tsx";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
