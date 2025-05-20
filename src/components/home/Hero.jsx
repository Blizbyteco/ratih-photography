import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  const textVariant = {
    initial: {
      x: 0,
    },
    animate: (i) => ({
      x: "100%",
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
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute z-10 bottom-[10%] left-0 w-full">
          <div className="max-w-[1200px] mx-auto space-y-4">
            <div className="relative w-max overflow-hidden py-1">
              <motion.div
                variants={textVariant}
                custom={0}
                initial="initial"
                animate="animate"
                className="absolute inset-0 w-full min-h-full bg-white whitespace-nowrap overflow-hidden origin-left"
              ></motion.div>
              <h1 className="text-white text-4xl font-normal">
                Kami Menghadirkan visual yang menggugah
              </h1>
            </div>
            <div className="relative w-max overflow-hidden py-1">
              <motion.div
                variants={textVariant}
                custom={0.7}
                initial="initial"
                animate="animate"
                className="absolute inset-0 w-full min-h-full bg-white whitespace-nowrap overflow-hidden origin-left"
              ></motion.div>
              <h1 className="text-white text-4xl font-normal">
                dan selaras dengan cita rasa serta visi brand Anda.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
