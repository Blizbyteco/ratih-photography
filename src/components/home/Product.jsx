import React from "react";
import ImageCursorScale from "../ui/ImageCursorScale";

const Product = () => {
  return (
    <section className="relative z-20 w-full min-h-screen bg-black text-white">
      <div className="grid grid-cols-2 px-8 py-32 gap-y-6">
        <h2 className="text-8xl col-span-2 font-semibold">Produk Unggulan</h2>
        <h2 className="text-8xl font-semibold text-right">Kami</h2>
        <h2 className="text-8xl font-semibold text-right">(06)</h2>
      </div>

      <div className="grid grid-cols-2 px-8 py-12 gap-y-12">
        <ImageCursorScale url="/images/example1.jpg" cursorText="Risoles" />

        <ImageCursorScale url="/images/example2.png" cursorText="Example 2" />
        <ImageCursorScale url="/images/example3.jpg" cursorText="Example 3" />
        <ImageCursorScale url="/images/example4.jpg" cursorText="Example 4" />
        <ImageCursorScale url="/images/example5.jpg" cursorText="Example 5" />
        <ImageCursorScale url="/images/example6.jpg" cursorText="Example 6" />
        <ImageCursorScale url="/images/example7.jpg" cursorText="Example 7" />
      </div>
    </section>
  );
};

export default Product;
