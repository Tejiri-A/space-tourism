import { technology } from "../../data.json";
import { cn } from "@sglara/cn";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function TechnologyView() {
  const [currentTechnology, setCurrentTechnology] = useState(0);
  const {
    name,
    images: { landscape, portrait },
    description,
  } = technology[currentTechnology];
  return (
    <AnimatePresence mode={"popLayout"}>
      <motion.div
        className={
          "flex flex-1 flex-col gap-y-400 lg:flex-row-reverse lg:items-center"
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        key={name}
      >
        <picture className={"-z-10 w-full flex-1 pt-800 lg:pt-0"}>
          <source
            srcSet={landscape}
            media={"(max-width: 1200px)"}
            type={"image/jpg"}
          />
          <img
            src={portrait}
            alt={name}
            className={"full-bleed-image lg:aspect-2/3 object-cover lg:max-h-152"}
          />
        </picture>
        <div
          className={
            "flex flex-1 flex-col items-center gap-500 lg:flex-row lg:gap-800"
          }
        >
          {/*  PAGINATION*/}
          <div className={"flex items-center gap-200 lg:flex-col lg:gap-400"}>
            {technology.map((_, index) => (
              <button
                type={"button"}
                key={index}
                className={cn(
                  "heading-4 flex size-500 cursor-pointer items-center justify-center rounded-full border-2 border-white/25 text-white transition-colors duration-300 hover:border-white md:size-14 lg:size-1000",
                  currentTechnology === index ? "text-dark bg-white" : null,
                )}
                onClick={() => setCurrentTechnology(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div
            className={
              "md:x-auto w-full flex-1 space-y-200 text-center md:max-w-lg lg:text-left"
            }
          >
            <div className={"space-y-200"}>
              <p className={"heading-4 text-white/50 uppercase"}>
                the terminology...
              </p>
              <h1 className={"heading-3 text-white"}>{name}</h1>
            </div>
            <p className={"body-text"}>{description}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default TechnologyView;
