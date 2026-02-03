import { destinations } from "../../data.json";
import { cn } from "@sglara/cn";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function DestinationView() {
  const [currDestination, setCurrDestination] = useState<number>(0);
  const { name, images, distance, description, travel } =
    destinations[currDestination];
  return (
    <AnimatePresence mode={"popLayout"}>
      <motion.div
        className={
          "flex w-full flex-1 flex-col gap-400 lg:flex-row lg:items-center"
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        key={name}
      >
        <div className={"flex flex-1 items-center justify-center"}>
          <picture>
            <source srcSet={images.webp} type={"image/webp"} />
            <source srcSet={images.png} type={"image/png"} />
            <img
              src={images.png}
              alt=""
              className={"size-37.5 md:size-75 lg:size-120"}
              fetchPriority={"high"}
            />
          </picture>
        </div>
        <div className={"flex-1"}>
          <div className={"mx-auto flex flex-col gap-300 md:w-4/5 lg:gap-500"}>
            <div
              className={
                "flex h-400 items-stretch justify-center gap-400 lg:justify-start"
              }
            >
              {destinations.map(({ name }, index) => (
                <button
                  key={index}
                  className={cn(
                    "nav-text text-light relative after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 hover:text-white",
                    currDestination === index
                      ? "after:bg-white"
                      : "hover:after:bg-white/50",
                  )}
                  type={"button"}
                  onClick={() => setCurrDestination(index)}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className={"space-y-200 text-center lg:text-left"}>
              <h1 className={"heading-2 text-white"}>{name}</h1>
              <p className={"body-text"}>{description}</p>
            </div>
            <hr className={"h-0.5 bg-white/25"} />
            <div
              className={
                "flex flex-col gap-300 text-center md:flex-row md:justify-center"
              }
            >
              <div className={"flex flex-1 flex-col gap-y-300 lg:items-start"}>
                <p className={"subheading-2 text-light"}>AVG. DISTANCE</p>
                <p
                  className={
                    "font-family-serif text-[1.75rem] leading-[0.321] text-white"
                  }
                >
                  {distance}
                </p>
              </div>
              <div className={"flex flex-1 flex-col gap-y-300 lg:items-start"}>
                <p className={"subheading-2 text-light"}>EST. TRAVEL TIME</p>
                <p
                  className={
                    "font-family-serif text-[1.75rem] leading-[0.321] text-white"
                  }
                >
                  {travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default DestinationView;
