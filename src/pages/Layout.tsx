import { Outlet, useLocation } from "react-router";
import Header from "../components/Header.tsx";
import { useEffect } from "react";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.forEach((c) => {
      if (c.startsWith("bg-")) document.body.classList.remove(c);
    });

    const path = location.pathname;
    const bgClass =
      path === "/"
        ? "bg-home"
        : path.startsWith("/destination")
          ? "bg-destination"
          : path.startsWith("/crew")
            ? "bg-crew"
            : path.startsWith("/technology")
              ? "bg-technology"
              : "bg-home";
    document.body.classList.add(bgClass);

    return () => {
      document.body.classList.remove(bgClass);
    };
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
