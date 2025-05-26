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
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute z-10 bottom-[10%] left-0 w-full">
          <div className="max-w-[1200px] mx-auto space-y-4">
            <div className="overflow-y-hidden">
              <motion.h1
                variants={textVariant}
                initial="initial"
                animate="animate"
                custom={0}
                className="text-white text-4xl font-normal"
              >
                Kami Menghadirkan visual yang menggugah
              </motion.h1>
            </div>

            <div className="overflow-y-hidden">
              <motion.h1
                variants={textVariant}
                initial="initial"
                animate="animate"
                custom={1}
                className="text-white text-4xl font-normal"
              >
                dan selaras dengan cita rasa serta visi brand Anda.
              </motion.h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
