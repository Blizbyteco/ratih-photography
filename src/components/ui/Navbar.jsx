import React, { useEffect, useState } from "react";
import {
  easeIn,
  easeOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Button from "./Button";
import UnderlinedTextReveal from "./UnderlinedTextReveal";

export default function Navbar() {
  const variants = {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1.3,
        ease: easeIn,
      },
    },
  };

  const fixedNavVariants = {
    initial: (i) => ({
      y: "120%",
      transition: {
        duration: 0.2,
        ease: easeOut,
        delay: i / 10,
      },
    }),

    animate: (i) => ({
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
        delay: (i / 10) + 0.3,
      },
    }),
  };

  const backgroundVariants = {
    initial: {
      height: 0,
      transition: {
        duration: 0.5,
        ease: easeIn,
        delay: 1.4
      },
    },
    
    animate: {
      height: "100vh",
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const { scrollYProgress } = useScroll();

  const [isActive, setIsActive] = useState(false);
  const [showNavBtn, setShowNavBtn] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.05) {
      setShowNavBtn(false);
    } else {
      setShowNavBtn(true);
    }
  });

  useEffect(() => {

    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isActive]);

  return (
    <>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="absolute left-0 top-0 w-full z-50"
      >
        <div className="max-w-[1200px] mx-auto flex justify-between items-center py-4">
          <img
            src="/images/logo.svg"
            alt="logo"
            className="aspect-video w-[200px]"
          />
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
          <Button text="Kontak kami" />
        </div>
      </motion.div>

      {/* fixed navbar */}
      <div className="fixed top-0 left-0 min-w-full bg-transparent z-40">
        <div className="max-w-[1200px] mx-auto flex justify-end items-center mt-8 overflow-y-hidden">
          <motion.div
            variants={fixedNavVariants}
            initial="initial"
            animate={showNavBtn ? "animate" : "initial"}
            custom={1}
            >
            <Button text="Kontak kami" />
          </motion.div>
          <motion.button
            variants={fixedNavVariants}
            initial="initial"
            animate={showNavBtn ? "animate" : "initial"}
            custom={2}
            onClick={() => setIsActive(true)}
            className="flex items-center gap-x-2 bg-white text-black hover:cursor-pointer px-4 rounded-full py-3 text-sm font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
            Menu
          </motion.button>
        </div>
      </div>

      {/* fixed content */}
      <motion.div
        variants={backgroundVariants}
        initial="initial"
        animate={isActive ? "animate" : "initial"}
        className="fixed min-w-full top-0 left-0 bg-white z-60 overflow-hidden"
      >

        <div className="max-w-[1200px] mx-auto flex justify-between items-center py-8">
          <img
              src="/images/logo-light.png"
              alt="logo"
              className="w-[200px]"
            />

            <button onClick={() => setIsActive(false)} className="text-black hover:cursor-pointer">Close</button>
        </div>

         <div className="mt-[10%]">
            <UnderlinedTextReveal url="/" text="Galeri" state={isActive}/>
         </div>
      </motion.div>
      {/* fixed content */}
    </>
  );
}
