import { motion } from "motion/react";
import { navLinks } from "../../constants.ts";
import { NavLink } from "react-router";

const variants = {
  open: { translateX: 0 },
  close: { translateX: "100%" },
};

function MobileMenu({
  closeMenu,
  isOpen,
}: {
  closeMenu: () => void;
  isOpen: boolean;
}) {
  return (
    <motion.div
      className={
        "bg-dark/15 fixed top-0 right-0 bottom-0 w-3/4 space-y-600 pl-400 backdrop-blur-md"
      }
      variants={variants}
      initial={"close"}
      animate={isOpen ? "open" : "close"}
      transition={{
        duration: 0.3,
      }}
      inert={!isOpen}
    >
      <div className={"flex justify-end py-400 pr-300"}>
        <button
          type={"button"}
          aria-label={"close menu"}
          className={"flex size-300 cursor-pointer items-center justify-center"}
          onClick={closeMenu}
        >
          <img src="/assets/shared/icon-close.svg" alt="close menu icon" />
        </button>
      </div>
      <nav className={"flex w-full flex-col gap-y-400"}>
        {navLinks.map(({ number, label, href }) => (
          <NavLink
            to={href}
            key={label}
            className={({ isActive }) =>
              `relative flex items-center gap-150 text-white ${isActive ? "after:absolute after:top-0 after:right-0 after:bottom-0 after:w-1 after:bg-white" : ""}`
            }
            viewTransition={true}
            onClick={closeMenu}
          >
            <span className={"nav-text font-bold"}>{number}</span>
            <span className={"nav-text"}>{label}</span>
          </NavLink>
        ))}
      </nav>
    </motion.div>
  );
}

export default MobileMenu;
