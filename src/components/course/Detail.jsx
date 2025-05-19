import React from "react";

export default function Detail() {
  return (
    <div className="col-span-2 bg-black items-center justify-center pt-50 flex flex-col">
      <h1 className="text-6xl font-bold text-white text-center max-w-250">
        Pilih Paket yang pas untuk Momenmu..
      </h1>
      <p className="font-semibold text-gray-400 text-3xl mt-10">
        Ratih hadir untuk segala kebutuhan fotografi.
      </p>
      <div className="grid md:grid col-3 gap-6 px-4 py-12">
        {/* paket dasar */}
        <div className="grid md:grid-cols-3 gap-6 px-4 py-12">
          <div className="max-w-sm mx-auto bg-neutral-200 rounded-2xl shadow-lg p-6 text-center ">
            <h2 className="text-xl font=semibold mb-2 ">Dasar</h2>
            <p className="text-3xl font-bold text-black mb-4">Rp.300.000</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✔</span>
                <span>4 Pertemuan</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✔</span>
                <span>Materi Teknik Dasar</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✔</span>
                <span>Praktik Lapangan</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✔</span>
                <span>E-Sertifikat</span>
              </li>
            </ul>
            <button className="bg-white  px-4 py-2 rounded-lg hover:bg-neutral-500 transition">
              daftar
            </button>
          </div>
          {/* Paket Lanjutan */}
          <div class="bg-white rounded-2xl shadow-lg p-6 text-center border-2 border-indigo-600">
            <h2 class="text-xl font-semibold mb-2">Lanjutan</h2>
            <p class="text-3xl font-bold text-indigo-600 mb-4">Rp600.000</p>
            <ul class="text-gray-600 space-y-2 mb-6">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✔</span>
                <span>6 Pertemuan</span>
              </li>
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
            <button class="w-full bg-indigo-600 text-white py-1.5 px-6 rounded-4xl flex items-center justify-between hover:bg-indigo-700 transition">
              <span>Daftar Sekarang</span>
              <span class="ml-2">➡️</span>
            </button>
          </div>
          <div class="bg-white rounded-2xl shadow-lg p-6 text-center border-2">
            <h2 class="text-xl font-semibold mb-2">Profesional</h2>
            <p class="text-3xl font-bold text-indigo-600 mb-4">Rp1.000.000</p>
            <ul class="text-gray-600 space-y-2 mb-6">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✔</span>
                <span>8 Pertemuan</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✔</span>
                <span>Pemotretan Komersial</span>
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
            <button class="w-full bg-indigo-600 text-white py-1.5 px-6 rounded-4xl flex items-center justify-between hover:bg-indigo-700 transition">
              <span>Daftar Sekarang</span>
              <span class="ml-2">➡️</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
