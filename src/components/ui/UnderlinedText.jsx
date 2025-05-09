import { easeIn } from "motion";
import { easeInOut, easeOut, motion } from "motion/react";
import React from "react";

export default function UnderlinedText({ index, text }) {

    const containerVariants = {
        initial: {
            width: 0
        },

        animate: {
            width: '100%',
            transition: {
                duration: 1.2,
                ease: easeOut,
                delay: 1 * (index / 10)
            }
        }
    }

    const spanVariants = {
        initial: {
            opacity: 0
        },

        animate: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: easeIn,
                delay: 0.8 + (index / 10)
            }
        }
    }

    const paragraphVariants = {
        initial: {
            y: 50
        },

        animate: {
            y: 0,
            transition: {
                duration: 0.5,
                ease: easeOut,
                delay: 1 + (index / 10)
            }
        }
    }

  return (
    <motion.div 
    variants={containerVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="border-b border-gray-400 max-w-[65%] pb-4 overflow-hidden">
        <div className="overflow-hidden flex shrink-0 flex-nowrap">
            <motion.span variants={spanVariants} initial="initial" animate="animate" className="text-gray-400 mr-4">({index})</motion.span>
            <motion.p className="whitespace-nowrap" variants={paragraphVariants} initial="initial" animate="animate">{text}</motion.p>
        </div>
    </motion.div>
  );
}
