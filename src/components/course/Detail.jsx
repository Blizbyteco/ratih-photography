import React from "react";
import Button from "../ui/Button";
import CardPaket from "../ui/CardPaket";

export default function Detail() {
  const dataPaket = [
    {
      title: "Online",
      price: "Rp100K selama 4 hari, via WhatsAppGroup",
      features: ["Lighting & Editing", "Studi kasus", "E-sertifikat"],
    },
    {
      title: "Offline",
      price: "Rp250K selama 3 jam, 2 kali pertemuan",
      features: ["Lighting & Editing", "Studi kasus", "E-sertifikat"],
    },
  ];

  return (
    <div className="col-span-2 bg-black items-center justify-center pt-50 flex flex-col">
      <h1 className="text-6xl font-bold text-white text-center max-w-250">
        Pilih Paket yang pas untuk Momenmu..
      </h1>
      <p className="font-semibold text-gray-400 text-3xl mt-10">
        Ratih hadir untuk segala kebutuhan fotografi.
      </p>

      {/* Grid Paket */}
      <div className="grid md:grid-cols-2 gap-5 px-4 py-12">
        {dataPaket.map((paket, index) => (
          <CardPaket
            key={index}
            title={paket.title}
            price={paket.price}
            features={paket.features}
          />
        ))}
      </div>
    </div>
  );
}
