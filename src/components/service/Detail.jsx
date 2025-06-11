import React from "react";
import PricingCard from "../ui/PricingCard";

export default function Detail() {
  const foodAndBevereges = [
    {
      title: "Paket Single",
      price: "Rp 65.000",
      features: [
        "5 Foto Produk",
        "Background Polos (Putih/Hitam)",
        "Editing Dasar",
        "Resolusi Siap Upload",
        "Estimasi: 1 hari kerja",
      ],
      text: "Pesan Sekarang",
    },
    {
      title: "Paket Basic",
      price: "Rp 110.000",
      features: ["Dapat 2 Foto Edit", "Maksimal 2 varian"],
      text: "Pesan Sekarang",
    },
    {
      title: "Paket Regular",
      price: "Rp 150.000",
      features: ["Dapat 4 Foto Edit", "Maksimal 4 varian"],
      text: "Pesan Sekarang",
    },
    {
      title: "Paket Special",
      price: "Rp 225.000",
      features: ["Dapat 6 Foto Edit", "Maksimal 6 varian"],
      text: "Pesan Sekarang",
    },
  ];
  const groupie = [
    {
      title: "4 Varian",
      price: "Rp 80.000",
      features: ["4 Varian"],
      text: "Pesan Sekarang",
    },
    {
      title: "5 Varian",
      price: "Rp 150.000",
      features: ["5 Varian"],
      text: "Pesan Sekarang",
    },
    {
      title: "6 Varian",
      price: "Rp 200.000",
      features: ["6 Varian"],
      text: "Pesan Sekarang",
    },
    {
      title: "8 Varian",
      price: "Rp 225.000",
      features: ["8 Varian"],
      text: "Pesan Sekarang",
    },
  ];
  const onTheSpot = [
    {
      title: "UMKM",
      price: "Rp 500.000",
      features: ["Maksimal 15 Foto Produk", "Jumlah varian dalam foto bebas"],
      text: "Pesan Sekarang",
    },
    {
      title: "Cafe/Resto",
      price: "Rp 1.500.000",
      features: [
        "Jumlah foto produk mengikuti jumlah menu yang tersedia",
        "Jumlah varian dalam foto bebas",
      ],
      text: "Pesan Sekarang",
    },
  ];

  return (
    <section className="col-span-2 bg-black items-center justify-center py-50 flex flex-col gap-y-36">
      <h1 className="text-3xl md:text-6xl font-bold text-white text-center max-w-250">
        Tampil Keren Bareng Paket Eksklusif
      </h1>
      <p className=" text-gray-400 mt-8 text-center text-sm md:text-xl">
        Upgrade Tampilan Produkmu dengan Paket Foto Eksklusif dari kami!
      </p>

      {/* Grid Paket */}

      <div className="space-y-8">
        <h1 className="text-white text-center md:text-3xl font-regular">
          FOOD & BEVEREGES
        </h1>
        <div className="grid md:grid-cols-3 gap-5 px-4">
          {foodAndBevereges.map((paket, index) => (
            <PricingCard
              key={index}
              title={paket.title}
              price={paket.price}
              features={paket.features}
              text={paket.text}
            />
          ))}
        </div>
      </div>
      <div className="space-y-8">
        <h1 className="text-white text-center md:text-3xl font-regular">
          GROUPIE
        </h1>
        <div className="grid md:grid-cols-3 gap-5 px-4">
          {groupie.map((paket, index) => (
            <PricingCard
              key={index}
              title={paket.title}
              price={paket.price}
              features={paket.features}
              text={paket.text}
            />
          ))}
        </div>
      </div>
      <div className="space-y-8">
        <h1 className="text-white text-center md:text-3xl font-regular">
          ON THE SPOT
        </h1>
        <div className="grid md:grid-cols-2 gap-5 px-4">
          {onTheSpot.map((paket, index) => (
            <PricingCard
              key={index}
              title={paket.title}
              price={paket.price}
              features={paket.features}
              text={paket.text}
            />
          ))}
        </div>
      </div>

      {/* end */}
    </section>
  );
}
