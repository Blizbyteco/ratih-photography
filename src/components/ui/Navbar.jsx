import React from "react";
import { easeIn, motion } from "motion/react";


export default function Navbar() {

  const variants = {
    initial: {
      opacity: 0
    },

    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1.3,
        ease: easeIn
      }
    }
  }

  return (
    <motion.div variants={variants} initial="initial" animate="animate" className="absolute left-0 top-0 w-full z-20">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center py-4">
        <img src="/images/logo.svg" alt="logo" className="aspect-video w-[150px]" />
        <div className="flex gap-x-12">
          <a href="#" className="text-white">
            Galeri
            <sup className="text-sm">(6)</sup>
          </a>
          <a href="#" className="text-white">
            Kursus
          </a>
          <a href="#" className="text-white">
            Layanan Kami
          </a>
        </div>
        <button className="flex gap-x-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
          Menu
        </button>
      </div>
    </motion.div>
  );
}
