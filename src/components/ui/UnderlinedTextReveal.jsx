import { delay } from "motion";
import { easeIn, easeOut, motion } from "motion/react";
import { Link } from "react-router-dom";

export default function UnderlinedTextReveal({ text, url, state }) {
  const variants = {
    container: {
      initial: {
        width: 0,
        transition: {
          duration: 0.8,
          ease: "easeIn",
          delay: 0.8,
        },
      },
      animate: {
        width: "100%",
        transition: {
          duration: 0.8,
          ease: "easeOut",
          delay: 0.8,
        },
      },
    },

    text: {
      initial: {
        y: 100,
        transition: {
          duration: 0.8,
          ease: easeIn,
        },
      },
      animate: {
        y: 0,
        transition: {
          duration: 0.8,
          ease: easeOut,
          delay: 1.4,
        },
      },
    },
  };

  return (
    <Link to={url}>
      <motion.div
        variants={variants.container}
        initial="initial"
        animate={state ? "animate" : "initial"}
        className="border-b border-black py-4 overflow-hidden hover:bg-black hover:text-white hover:cursor-pointer transition-colors duration-200 flex flex-col items-start"
      >
        <div className="overflow-y-hidden w-[1200px] h-max mx-auto flex justify-between items-center shrink-0">
          <motion.h1
            variants={variants.text}
            initial="initial"
            animate={state ? "animate" : "initial"}
            className="text-6xl font-semibold text-left"
          >
            {text}
          </motion.h1>
        </div>
      </motion.div>
    </Link>
  );
}
