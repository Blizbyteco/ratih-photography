import React from "react";
import ImageCursorScale from "../ui/ImageCursorScale";

const Product = () => {
  return (
    <section className="relative z-20 w-full min-h-screen bg-black text-white">
      <div className="grid grid-cols-2 px-8 py-32 gap-y-6">
        <h2 className="text-8xl col-span-2 font-semibold">HASIL FOTO</h2>
        <h2 className="text-8xl font-semibold text-right">KAMI</h2>
        <h2 className="text-8xl font-semibold text-right">06</h2>
      </div>

      <div className="grid grid-cols-2 px-8 py-12 gap-y-12">
        <ImageCursorScale url="/images/implement-1.jpeg" cursorText="Risoles" />
        <ImageCursorScale url="/images/implement-2.jpeg" cursorText="Example 2" />
        <ImageCursorScale url="/images/implement-3.jpeg" cursorText="Example 3" />
        <ImageCursorScale url="/images/implement-4.jpeg" cursorText="Example 4" />
        <ImageCursorScale url="/images/implement-5.jpeg" cursorText="Example 5" />
      </div>
    </section>
  );
};

export default Product;
