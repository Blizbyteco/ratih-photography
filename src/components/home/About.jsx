import React from "react";
import Button from "@/components/ui/Button";

const About = () => {
  return (
    <section className="relative z-20 w-full min-h-screen bg-black text-white">
      <div className="py-24 px-8 grid grid-cols-1 sm:grid-cols-4 gap-x-6 gap-y-6">
        <h2 className="text-5xl sm:text-8xl font-semibold poppins-medium col-span-4 max-w-[15ch]">
          Potret Produk Anda
        </h2>
        <div></div>

        <img
          className="aspect-2/3 object-cover"
          src="/images/example1.jpg"
          alt=""
        />
        <h2 className="text-5xl sm:text-8xl col-span-2  poppins-medium font-semibold max-w-[10ch]">
          Dengan Lensa Kami
        </h2>

        <div></div>
        <div className="col-span-3 sm:col-span-2">
          <h2 className="text-md sm:text-lg text-gray-300">
            Prinsip dari visi dan misi kami adalah membuat produk anda tampil
            menarik secara visual. Kami pastikan setiap gambar memiliki kualitas
            tinggi dan menarik sehingga meninggalkan kesan yang mendalam. Dan
            kami juga menghadirkan kehangatan pada setiap gambar produk anda
            untuk meningkatkan citra brand anda.
          </h2>
          <Button text="Pelajari Lebih Lanjut" className="my-8" />
        </div>
      </div>
    </section>
  );
};

export default About;
