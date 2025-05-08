import React, { useState } from "react";
import { easeIn, easeOut, motion } from "motion/react";

export default function TextSlide({ text }) {
  const [isHovered, setIsHovered] = useState(false);

  const textVariants = {
    first: {
        initial: {
            y: 0,
            transition: {
                duration: 0.2,
                ease: easeIn
            }
        },

        animate: {
            y: -70,
            transition: {
                duration: 0.3,
                ease: easeOut
            }
        }
    },


    last: {
        initial: {
            y: 70,
            transition: {
                duration: 0.3,
                ease: easeIn
            }
        },

        animate: {
            y: 0,
            transition: {
                duration: 0.2,
                ease: easeIn
            }
        }
    }
  }

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <div className="relative w-[20em] h-[50px] hover:cursor-pointer overflow-y-hidden overflow-x-visible">
            <motion.h1 
            variants={textVariants.first}
            initial="initial"
            animate={isHovered ? "animate" : "initial" }
            className="absolute top-0 left-0 font-semibold text-white text-5xl whitespace-nowrap">{text}</motion.h1>
            <motion.h1
            variants={textVariants.last}
            initial="initial"
            animate={isHovered ? "animate" : "initial" }
            className="absolute top-0 left-0 font-semibold text-white text-5xl whitespace-nowrap">{text}</motion.h1>
        </div>
    </motion.div>
  );
}
