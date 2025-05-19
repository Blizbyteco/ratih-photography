import React from "react";
import Button from "../ui/Button";

export default function Detail() {
  return (
    <div className="col-span-2 bg-black items-center justify-center pt-50 flex flex-col">
      <h1 className="text-6xl font-bold text-white text-center max-w-250">
        Pilih Paket yang pas untuk Momenmu..
      </h1>
      <p className="font-semibold text-gray-400 text-3xl mt-10">
        Ratih hadir untuk segala kebutuhan fotografi.
      </p>
      <div className="grid md:grid col-3 gap-6 px-4 py-12 ">
        {/* paket dasar */}
        <div className="grid md:grid-cols-2  px-4 py-8 gap-3 ">
          <div className="bg-black shadow-lg py-12 px-4 border-[0.5px] border-white">
            <h2 class="text-3xl font-bold mb-2 text-white">Online</h2>
            <p class="text-1xl font-semibold text-gray-400 mb-4 mt-3">
              Rp100K selama 4 hari, via WhatsAppGroup
            </p>
            <ul class="text-white space-y-2 mt-10">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✔</span>
                <span>Lighting & Editing</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✔</span>
                <span>Studi kasus</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✔</span>
                <span>E-sertifikat</span>
              </li>
            </ul>
            <Button className={"mt-20"} text={"Daftar Sekarang"} />
          </div>
          {/* Paket Lanjutan */}
          <div className="bg-black shadow-lg py-12 px-4 border-[0.5px] border-white">
            <h2 class="text-3xl font-bold mb-2 text-white">Offline</h2>
            <p class="text-1xl font-semibold text-gray-400 mb-4 mt-3">
              Rp250K selama 3 jam, 2 kali pertemuan
            </p>
            <ul class="text-white space-y-2 mt-10">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✔</span>
                <span>Lighting & Editing</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✔</span>
                <span>Studi kasus</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✔</span>
                <span>E-sertifikat</span>
              </li>
            </ul>
            <Button className={"mt-20"} text={"Daftar Sekarang"} />
          </div>
        </div>
      </div>
    </div>
  );
}
