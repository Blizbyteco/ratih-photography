import React from "react";
import Navbar from "../components/Navbar";
// import Container from "../components/Container";
import Button from "../components/Button";
import { motion } from "motion/react";
import UnderlinedText from "../components/UnderlinedText";
import TextSlide from "../components/TextSlide";
import LabeledText from "../components/LabeledText";

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
        ease: "easeInOut",
      },
    }),
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
            <div className="relative w-max overflow-hidden">
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

      <section className="relative z-20 w-full min-h-screen bg-black text-white">
        <div className="grid grid-cols-2 px-8 py-32 gap-y-6">
          <h2 className="text-8xl col-span-2 font-semibold">PRODUK UNGGULAN</h2>
          <h2 className="text-8xl font-semibold text-center">KAMI</h2>
          <h2 className="text-8xl font-semibold text-center">(06)</h2>
        </div>

        <div className="grid grid-cols-2 px-8 py-12 gap-y-12">
          <img
            className="w-[90%]"
            src="/images/example1.jpg"
            alt="example-photo"
          />
          <img
            className="w-[90%]"
            src="/images/example2.png"
            alt="example-photo"
          />
          <img
            className="w-[90%]"
            src="/images/example3.jpg"
            alt="example-photo"
          />
          <img
            className="w-[90%]"
            src="/images/example4.jpg"
            alt="example-photo"
          />
          <img
            className="w-[90%]"
            src="/images/example5.jpg"
            alt="example-photo"
          />
          <img
            className="w-[90%]"
            src="/images/example6.jpg"
            alt="example-photo"
          />
          <img
            className="w-[90%]"
            src="/images/example7.jpg"
            alt="example-photo"
          />
        </div>
      </section>

      <section className="relative z-20 w-full min-h-screen bg-black text-white">
        <div className="grid grid-cols-3 px-8 py-32">
          <div>
            <h2 className="font-medium">(Hasil Kami)</h2>
            <img
              className="w-[300px] mt-4"
              src="/images/example8.jpeg"
              alt="hasil-kami-photo"
            />
            <div className="mt-16 space-y-8">
              <UnderlinedText index="01" text="Fotografi Makanan" />
              <UnderlinedText index="02" text="Fotografi Produk" />
              <UnderlinedText index="03" text="Konsultasi Fotografi" />
              {/*               
              <div className="flex border-b border-gray-400 max-w-[65%] pb-4">
                <span className="text-gray-400 mr-4">(02)</span>Fotografi Produk
              </div>
              <div className="flex border-b border-gray-400 max-w-[65%] pb-4">
                <span className="text-gray-400 mr-4">(03)</span>Konsultasi Fotografi
              </div> */}
            </div>
          </div>

          <div className=" col-span-2">
            <h1 className="text-6xl font-semibold leading-16">
              {" "}
              Halo, saya Nik Ratih, seorang fotografer makanan yang berbasis di
              kota Pamekasan, Madura. Saya memiliki passion dalam mengabadikan
              kelezatan makanan melalui lensa kamera.
            </h1>
            <h1 className="text-6xl font-semibold mt-18 leading-16">
              {" "}
              Dengan pengalaman dan keterampilan dalam fotografi makanan, saya
              dapat membantu Anda menampilkan hidangan Anda dengan cara yang
              paling menarik.
            </h1>
          </div>
        </div>
      </section>

      <section className="relative z-20 w-full min-h-screen bg-black text-white">
        <div className="grid grid-cols-3 px-16 py-32 gap-y-6">
          <div className="col-span-3">
            <h1 className="text-8xl font-semibold">
              Mari Ciptakan Visual yang
            </h1>
          </div>
          <div className="col-span-3">
            <h1 className="text-8xl font-semibold">Mengunggah selera dan</h1>
          </div>
          <div></div>
          <div className="col-span-2">
            <h1 className="text-8xl font-semibold">mewakili brand Anda</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <Button text="Hubungi Kami" />
        </div>
      </section>

      <footer className="border-t border-gray-400 py-18 relative z-20 w-full min-h-[95vh] bg-black text-white">
        <div className="grid grid-cols-4 gap-x-16 px-16">
          <div className="flex flex-col items-center">
            <img
              src="/images/example8.jpeg"
              alt="studio"
              className="w-[300px]"
            />
            <img src="/images/logo.svg" alt="logo" className="w-[300px]" />
          </div>

          {/* navigations */}
          <div className="flex flex-col">
            <p className="text-sm">(NAVIGATION)</p>
            <div className="mt-4 space-y-4">
              <TextSlide text="Galeri" />
              <TextSlide text="Layanan" />
              <TextSlide text="Kursus" />
              <TextSlide text="Hubungi Kami" />
            </div>
          </div>

          <div></div>

          <div className="flex flex-col">
            <p className="text-sm">(INFORMASI)</p>
            <div className="mt-4 space-y-4 flex flex-col justify-start">
              <LabeledText
                title="Lokasi"
                content="jln. Veteran gg 6 no.20 Pamekasan, madura."
              />
              <LabeledText title="Email" content="nik.ratih99@gmail.com" />
              <LabeledText title="Instagram" content="@nikratih" />
              <LabeledText
                title="WhatsApp"
                content="081939334000"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
