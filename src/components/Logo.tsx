import { Link, useLocation } from "react-router";

function Logo() {
  const location = useLocation();
  return (
    <Link
      to={"/"}
      className={`inline-block w-fit shrink-0 ${location.pathname === "/" ? "pointer-events-none" : ""}`}
    >
      <img
        src={"/assets/shared/logo.svg"}
        alt="logo"
        aria-label={"Navigate to home page"}
      />
    </Link>
  );
}

export default Logo;
