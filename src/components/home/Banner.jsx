import React from "react";
import Button from "@/components/ui/Button";

const Banner = () => {
  return (
    <section className="relative z-20 w-full min-h-screen bg-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 px-8 sm:px-16 py-32 gap-y-4">
        <div className="col-span-3">
          <h1 className="text-3xl sm:text-8xl font-semibold">
            Mari Ciptakan Visual Yang
          </h1>
        </div>
        <div className="col-span-3">
          <h1 className="text-3xl sm:text-8xl font-semibold">
            Mengunggah Selera Dan
          </h1>
        </div>
        <div className="hidden sm:block"></div>
        <div className="col-span-3 sm:col-span-2">
          <h1 className="text-3xl sm:text-8xl font-semibold">
            Mewakili Brand Anda
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <Button text="Hubungi Kami" />
      </div>
    </section>
  );
};

export default Banner;
