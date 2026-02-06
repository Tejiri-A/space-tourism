import { crew } from "../../data.json";
import { cn } from "@sglara/cn";
import { useState } from "react";
import { preload } from "react-dom";
import { AnimatePresence, motion } from "motion/react";

function CrewView() {
  crew.forEach(({ images }) => {
    preload(images.webp, { as: "image" });
    preload(images.png, { as: "image" });
  });
  const [activeMember, setActiveMember] = useState<number>(0);
  const { name, role, bio, images } = crew[activeMember];

  return (
    <AnimatePresence mode={"popLayout"}>
      <motion.div
        className={"flex flex-1 flex-col gap-400 lg:flex-row"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        key={name}
      >
        <div className={"flex flex-col gap-300 py-500 lg:flex-1 lg:gap-500"}>
          <div className={"flex flex-1 flex-col gap-300 justify-self-center"}>
            <div
              className={
                "flex flex-col gap-y-100 text-center md:gap-y-200 lg:justify-center lg:text-left"
              }
            >
              <p className={"heading-4 text-white/50"}>{role}</p>
              <h1 className={"heading-3 text-white"}>{name}</h1>
            </div>
            <p className={"body-text text-center lg:text-left"}>{bio}</p>
          </div>
          <div
            className={
              "flex items-center justify-center gap-200 justify-self-end lg:gap-500"
            }
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <button
                type={"button"}
                key={index}
                className={cn(
                  "size-2.5 rounded-full bg-white/25 lg:size-3.75",
                  activeMember === index ? "bg-white" : "hover:bg-white/50",
                )}
                onClick={() => setActiveMember(index)}
              ></button>
            ))}
          </div>
        </div>
        <div className={"flex-1 overflow-hidden"}>
          <picture
            className={
              "flex w-[95%] max-w-full items-center justify-center mask-[linear-gradient(to_bottom,black_70%,transparent_100%)] md:mask-none lg:mask-[linear-gradient(to_bottom,black_70%,transparent_100%)]"
            }
          >
            <source srcSet={images.webp} type={"image/webp"} />
            <source srcSet={images.png} type={"image/png"} />
            <img
              src={images.png}
              alt={name}
              className={
                "h-85 w-67.5 object-contain object-center md:h-140 md:w-111.5 lg:max-h-160 lg:w-full"
              }
            />
          </picture>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CrewView;
