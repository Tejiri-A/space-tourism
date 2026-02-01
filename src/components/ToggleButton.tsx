function ToggleButton({ openMenu }: { openMenu: () => void }) {
  return (
    <button type={"button"} onClick={openMenu} aria-label={"open menu"}>
      <img src="/assets/shared/icon-hamburger.svg" alt="hamburger icon" />
    </button>
  );
}

export default ToggleButton;
