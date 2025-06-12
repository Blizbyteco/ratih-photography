import React from "react";
import UnderlinedText from "@/components/ui/UnderlinedText";

const Result = () => {
  return (
    <section className="relative z-20 w-full min-h-screen bg-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 px-8 py-32">
        <div>
          <img
            className="w-full sm:w-[300px] mt-4"
            src="/images/banner.jpg"
            alt="hasil-kami-photo"
          />
          <div className="mt-16 space-y-8">
            <UnderlinedText index="01" text="Fotografi Makanan" />
            <UnderlinedText index="02" text="Fotografi Produk" />
            <UnderlinedText index="03" text="Konsultasi Fotografi" />
          </div>
        </div>

        <div className="col-span-2">
          <h1 className="text-xl sm:text-5xl font-semibold leading-7 sm:leading-15 mt-12">
            Halo, saya Nik Ratih, seorang fotografer makanan yang berbasis di
            kota Pamekasan, Madura. Saya dapat membantu anda  menampilkan foto produk yang menarik secara visual dan membuat produk anda tampil lebih profesional.
          </h1>
          <h1 className="text-xl sm:text-5xl font-semibold mt-6 sm:mt-18 leading-7 sm:leading-15">
            Dengan pengalaman dan keterampilan dalam fotografi makanan, saya
            dapat membantu Anda menampilkan hidangan Anda dengan cara yang
            paling menarik.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Result;
