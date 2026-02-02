import { Link } from "react-router";
function LinkToDestination() {
  return (
    <Link
      to={"/destination"}
      className={
        "shadow-87/0 md:shadow-88/0 hover:shadow-87/10 md:hover:shadow-88/10 group flex size-36 items-center justify-center rounded-full bg-white transition-all duration-300 md:size-68"
      }
      viewTransition={true}
    >
      <span
        className={
          "heading-4 text-dark transition-all duration-300 group-hover:opacity-50"
        }
      >
        EXPLORE
      </span>
    </Link>
  );
}

export default LinkToDestination;
