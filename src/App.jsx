import React from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Button from "./components/Button";
import { motion } from "motion/react";

const App = () => {

  const textVariant = {
    initial: {
      x: 0,
    },
    animate: (i) => ({
      x: "100%",
      transition: {
        delay: i * 0.3, // i is the custom prop passed in
        duration: 1.2,
        ease: "easeInOut"
      }
    })
  };
  

  return (
    <>
      <Navbar />

      {/* Fixed hero section */}
      <section className="min-h-screen w-full fixed left-0 top-0 z-10">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Content at the bottom-left */}
        <div className="absolute z-10 bottom-[10%] left-0 w-full">
          <div className="max-w-[1200px] mx-auto space-y-4">

            <div className="relative w-max overflow-hidden">
              <motion.div variants={textVariant} custom={0} initial="initial" animate="animate" className="absolute inset-0 w-full min-h-full bg-white whitespace-nowrap overflow-hidden origin-left"></motion.div>
              <h1 className="text-white text-4xl font-normal">
                Kami Menghadirkan visual yang menggugah
              </h1>
            </div>
            <div className="relative w-max overflow-hidden">
              <motion.div variants={textVariant} custom={0.7} initial="initial" animate="animate" className="absolute inset-0 w-full min-h-full bg-white whitespace-nowrap overflow-hidden origin-left"></motion.div>
              <h1 className="text-white text-4xl font-normal">
                dan selaras dengan cita rasa serta visi brand Anda.
              </h1>
            </div>

{/*             
            <h1 className="text-white text-4xl font-normal">
              dan selaras dengan cita rasa serta visi brand Anda.
            </h1> */}
          </div>
        </div>
      </section>

      {/* Spacer to make room for the fixed section */}
      <div className="h-screen" />

      {/* Second section that scrolls on top */}
      <section className="relative z-20 w-full min-h-screen bg-black text-white">
        <div className="p-8 grid grid-cols-4 gap-x-6 gap-y-6">
          <h2 className="text-8xl font-semibold col-span-4 max-w-[15ch]">
            POTRET PRODUK ANDA
          </h2>
          <div></div>

          <img src="/images/example1.jpg" alt="" />
          <h2 className="text-8xl col-span-2 font-semibold max-w-[10ch]">
            DALAM LENSA KAMI
          </h2>

          <div></div>
          <div className="col-span-2">
            <h2 className="text-lg text-gray-300">
              Kami memotret makanan untuk menjual rasa. Dari UMKM hingga
              restoran besar, kami tetap fokus pada esensi. Kami dengarkan dulu,
              lalu ambil gambar, untuk menciptakan visual yang sesuai dengan
              brand dan cerita hidangan Anda. Lalu, kami menerjemahkannya ke
              dalam visual yang menggugah selera. Berbekal pengalaman nyata,
              kami menciptakan konten yang otentik, menggoda, dan terasa alami,
              seperti rasa yang ingin Anda hadirkan.
            </h2>
            <Button text="PELAJARI LEBIH LANJUT" className="my-8" />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
