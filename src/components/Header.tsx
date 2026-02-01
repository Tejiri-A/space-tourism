import Logo from "./Logo.tsx";
import ToggleButton from "./ToggleButton.tsx";
import MobileMenu from "./MobileMenu.tsx";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openMenu = () => {
    setIsOpen(true);
  }
  const closeMenu = () => {
    setIsOpen(false)
  }
  return (
    <header className={"py-300 md:py-0 lg:pt-500"}>
      <nav className={"grid grid-cols-2 items-center"}>
        <div className={"pl-300"}>
          <Logo />
        </div>
        <div className={"flex justify-end pr-300 md:hidden"}>
          <ToggleButton openMenu={openMenu} />
        </div>
      </nav>
      <MobileMenu closeMenu={closeMenu} isOpen={isOpen} />
    </header>
  );
}

export default Header;
