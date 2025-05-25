import PricingCard from "../ui/PricingCard";

export default function Detail() {
  const DataKelas = [
    {
      title: "Online",
      price: "Rp 100.000 / Bulan",
      features: ["Pembelajaran Secara langsung", "Group WhatsApp"],
      text: "Daftar Sekarang",
    },
    {
      title: "Offline",
      price: "Rp 250.000 / Bulan",
      features: ["Lighting & Editing", "Studi kasus"],
      text: "Daftar Sekarang",
    },
  ];

  return (
    <section className="col-span-2 bg-black items-center justify-center pt-50 flex flex-col">
      <h1 className="text-6xl font-bold text-white text-center max-w-250">
        Kepengen belajar foto produk?
      </h1>
      <p className="text-gray-400 text-xl mt-8 text-center w-270">
        Tenang aja, kami menyediakan berbagai pilihan paket belajar baik online maupun
        offline yang bisa disesuaikan dengan waktu dan kebutuhanmu
      </p>

      {/* Grid Paket */}
      <div className="grid md:grid-cols-2 gap-5 px-4 py-12">
        {DataKelas.map((paket, index) => (
          <PricingCard
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
