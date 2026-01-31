import { Link } from "react-router";
function LinkToDestination() {
  return (
    <Link
      to={"/destinations"}
      className={
        "shadow-87/0 md:shadow-88/0 hover:shadow-87/10 md:hover:shadow-88/10 group size-36 rounded-full bg-white transition-all duration-300 md:size-68"
      }
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
