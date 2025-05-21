import { delay } from "motion";
import { easeIn, easeOut, motion } from "motion/react";
import LoaderBar from "./LoaderBar";
import TextSlide from "../loader/TextSlide";

export default function PageLoader({ animationCompleteCallback }) {
  const containerVariant = {
    initial: {
      opacity: 1,
    },

    animate: {
      opacity: 0,
      display: "none",
      transition: {
        ease: easeIn,
        duration: 0.8,
        delay: 3,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariant}
      className="w-full min-h-screen fixed z-99 top-0 left-0 bg-black"
    >
      <LoaderBar animationCompleteCallback={animationCompleteCallback} />

      <div className="absolute bottom-0 left-0 px-12 flex items-end justify-between w-full">
        <div>
          <img
            src="/images/logo-light.svg"
            alt="logo"
            className="size-[160px]"
          />
          <TextSlide text="NR"/>
        </div>

        <p className="text-sm text-white font-medium">STUDIO FOTOGRAFI</p>
      </div>
    </motion.div>
  );
}
