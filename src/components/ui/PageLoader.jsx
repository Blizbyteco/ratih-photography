import { delay } from "motion";
import { easeIn, easeOut, motion } from "motion/react";
import LoaderBar from "./LoaderBar";

export default function PageLoader() {
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
        delay: 3
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
      <h1 className="text-white">Hello worlds</h1>


        <LoaderBar />
    </motion.div>
  );
}
