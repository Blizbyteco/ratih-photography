import React from 'react'
import { easeIn, easeOut, motion } from 'motion/react'
import { delay } from 'motion'

export default function TextSlide({ text }) {

   const textVariants = {
    first: {
        initial: {
            y: 0,
        },

        animate: {
            y: -120,
            transition: {
                type: "spring",
                bounce: 0,
                damping: 10 ,
                delay: 1
            }
        }
    },
    
    
    last: {
        initial: {
            y: 100,
        },
        
        animate: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0,
                damping: 10 ,
                restDelta: 0,
                delay: 1
            }
        }
    }
  }

  return (
    <div className="relative w-[20em] h-[100px] overflow-y-hidden overflow-x-visible">
            <motion.h1 
            variants={textVariants.first}
            initial="initial"
            animate="animate"
            className="absolute top-1/2 left-0 font-semibold text-white text-9xl whitespace-nowrap leading-1">{text}</motion.h1>
            <motion.h1 
            variants={textVariants.last}
            initial="initial"
            animate="animate"
            className="absolute top-1/2 left-0 font-semibold text-white text-9xl whitespace-nowrap leading-1">{text}</motion.h1>
        </div>
  )
}
