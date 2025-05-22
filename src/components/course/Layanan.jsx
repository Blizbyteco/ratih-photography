import React from "react";
import Button from "../ui/Button";
import CardPaket from "../ui/CardPaket";

export default function Detail() {
  const dataPaket = [
    {
      title: "Paket Basic",
      price: "Rp 250.000",
      features: [
        "5 Foto Produk",
        "Background Polos (Putih/Hitam)",
        "Editing Dasar",
        "Resolusi Siap Upload",
        "🕒 Estimasi: 1 hari kerja",
      ],
      text: "Pesan Sekarang",
    },
    {
      title: "Paket Standart",
      price: "Rp 500.000",
      features: [
        "10 Foto Produk",
        "2 Konsep background atau properti",
        "Editing warna Dan pencahayaan",
        "File High-Res + Web Ready",
        "🕒 Estimasi pengerjaan: 4–5 hari kerja",
      ],
      text: "Pesan Sekarang",
    },
    {
      title: "Paket Premium Branding",
      price: "Rp 1.200.000",
      features: [
        "20 Foto Produk",
        "3 Konsep Styling (flatlay, lifestyle, close-up)",
        "Properti + Model tangan/pengguna",
        "Retouching detail & versi sosial media",
        "🕒 Estimasi pengerjaan: 4–5 hari kerja",
      ],
      text: "Pesan Sekarang",
    },
  ];

  return (
    <section className="col-span-2 bg-black items-center justify-center pt-50 flex flex-col">
      <h1 className="text-6xl font-bold text-white text-center max-w-250">
        Paket Foto Produk Eksklusif dari Ratih
      </h1>
      <p className="font-semibold text-gray-400 text-2xl mt-10">
        Kami hadir dengan pilihan paket fotografi produk yang disesuaikan dengan
        kebutuhan brand-mu.
      </p>

      {/* Grid Paket */}
      <div className="grid md:grid-cols-3  gap-5 px-4 py-12">
        {dataPaket.map((paket, index) => (
          <CardPaket
            key={index}
            title={paket.title}
            price={paket.price}
            features={paket.features}
            text={paket.text}
          />
        ))}
      </div>
    </section>
  );
}
