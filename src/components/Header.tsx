import Logo from "./Logo.tsx";
import ToggleButton from "./ToggleButton.tsx";
import MobileMenu from "./MobileMenu.tsx";
import { useState } from "react";
import { navLinks } from "../../constants.ts";
import { NavLink, useLocation } from "react-router";

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className={"py-300 md:py-0 lg:pt-500"}>
      <nav
        className={
          "grid grid-cols-2 items-center md:grid-cols-[auto_1fr] lg:grid-cols-2"
        }
      >
        <div
          className={
            "flex items-center gap-800 pl-300 md:w-40 md:pl-500 lg:w-full lg:pl-800"
          }
        >
          <Logo />
          <hr
            className={
              "relative z-10 -mr-500 hidden h-0.5 w-full flex-1 bg-white/25 lg:block"
            }
          />
        </div>
        <div className={"flex justify-end pr-300 md:hidden"}>
          <ToggleButton openMenu={openMenu} />
        </div>
        <ul
          className={
            "hidden h-1200 justify-end gap-600 bg-white/5 px-500 text-white backdrop-blur-md md:flex"
          }
        >
          {navLinks.map(({ label, href, number }, index) => (
            <NavLink
              to={href}
              key={href}
              className={({ isActive }) =>
                `nav-text relative flex items-center gap-150 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-1 after:transition-colors after:duration-150 ${isActive ? "after:bg-white" : "hover:after:bg-white/50"}`
              }
              viewTransition={true}
            >
              {index !== 0 ? (
                <span className={"font-bold"}>
                  {index !== 0
                    ? number
                    : location.pathname !== "/"
                      ? number
                      : ""}
                </span>
              ) : location.pathname !== "/" ? (
                <span className={"font-bold"}>
                  {index !== 0
                    ? number
                    : location.pathname !== "/"
                      ? number
                      : ""}
                </span>
              ) : (
                ""
              )}

              <span>{label}</span>
            </NavLink>
          ))}
        </ul>
      </nav>
      <MobileMenu closeMenu={closeMenu} isOpen={isOpen} />
    </header>
  );
}

export default Header;
