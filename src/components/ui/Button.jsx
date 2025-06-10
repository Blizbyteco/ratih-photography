import { easeIn, motion } from "motion/react";
import React, { useState } from "react";

export default function Button({ text, className, onClick, groupHovered=false}) {
  const [parentHovered, setParentHovered] = useState(groupHovered);

  const textVariants = {
    first: {
      initial: {
        y: 0,
      },

      animate: {
        y: -30,
        transition: {
          duration: 0.2,
          ease: easeIn,
        },
      },
    },

    second: {
      initial: {
        y: 0,
      },

      animate: {
        y: -20,
        transition: {
          duration: 0.2,
          ease: easeIn,
        },
      },
    },
  };

  const circleVariants = {
    initial: {
      backgroundColor: "white",
      scale: 1,
    },

    animate: {
      backgroundColor: "black",
      scale: 1.5,
    },
  };

  return (
    <motion.div
      className={`rounded-full flex gap-x-4 items-center bg-white w-max px-5 py-3 hover:cursor-pointer overflow-y-hidden min-w-[220px] ${className} relative overflow-hidden`}
      onHoverStart={!groupHovered ? () => setParentHovered(true) : ''}
      onHoverEnd={!groupHovered ? () => setParentHovered(false) : ''}
      onClick={onClick}
    >
      <div className="relative w-max max-h-[20px] overflow-y-hidden bg-white">
        <motion.p
          variants={textVariants.first}
          initial="initial"
          animate={parentHovered || groupHovered ? "animate" : "initial"}
          className="text-black font-semibold text-sm whitespace-nowrap"
        >
          {text}
        </motion.p>
        <motion.p
          variants={textVariants.second}
          initial="initial"
          animate={parentHovered || groupHovered ? "animate" : "initial"}
          className="text-black font-semibold text-sm whitespace-nowrap"
        >
          {text}
        </motion.p>
      </div>
      {/* circle */}
      <motion.div
        className="absolute right-3 rounded-full size-2 border-[1.5px] border-black"
        initial="initial"
        animate={parentHovered || groupHovered ? "animate" : "initial"}
        variants={circleVariants}
      ></motion.div>
    </motion.div>
  );
}
