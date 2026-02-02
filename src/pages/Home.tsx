import LinkToDestination from "../components/LinkToDestination.tsx";

function Home() {
  return (
    <main
      className={
        "flex items-stretch p-300 md:px-500 md:py-[128px] lg:items-end lg:px-0"
      }
    >
      <div
        className={
          "mx-auto flex w-full max-w-277.5 flex-col items-center lg:flex-row lg:items-end"
        }
      >
        <div className={"flex-1 space-y-300 text-center lg:text-left"}>
          <p className={"subheading-1 md:heading-5 text-light"}>
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className={"heading-1 text-white"}>SPACE</h1>
          <p className={"body-text"}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div
          className={"flex flex-1 items-center justify-center lg:justify-end"}
        >
          <LinkToDestination />
          {/*<div className={"size-24 rounded-full bg-white"}/>*/}
        </div>
      </div>
    </main>
  );
}

export default Home;
