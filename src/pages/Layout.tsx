import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <nav>Navbar</nav>
      <Outlet />
    </>
  );
}

export default Layout;
