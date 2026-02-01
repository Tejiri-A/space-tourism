import { Link } from "react-router";

function Logo() {
  return (
    <Link to={"/"} className={"inline-block w-fit"}>
      <img
        src={"/assets/shared/logo.svg"}
        alt="logo"
        aria-label={"Navigate to home page"}
      />
    </Link>
  );
}

export default Logo;
