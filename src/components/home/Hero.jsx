import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  const textVariant = {
    initial: {
      y: 100,
    },
    animate: (i) => ({
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 1.2,
        ease: "easeInOut",
      },
    }),
  };
  return (
    <div className="min-h-screen">
      <section className="min-h-screen w-full fixed left-0 top-0 z-10">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-right"
          style={{ backgroundImage: "url('/images/hero-bg.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute z-10 bottom-[10%] left-0 w-full">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="overflow-y-hidden">
              <motion.h1
                variants={textVariant}
                initial="initial"
                animate="animate"
                custom={0}
                className="text-white text-xl sm:text-4xl font-normal py-0 sm:py-2"
              >
                Kami Menghadirkan visual yang menggugah selara
              </motion.h1>
            </div>

            <div className="overflow-y-hidden">
              <motion.h1
                variants={textVariant}
                initial="initial"
                animate="animate"
                custom={1}
                className="text-white text-xl sm:text-4xl font-normal py-0 sm:py-2"
              >
                dan membantu meningkatkan visi brand anda.
              </motion.h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
