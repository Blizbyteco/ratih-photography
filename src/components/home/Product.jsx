import React, { useEffect, useRef } from "react";
import ImageCursorScale from "../ui/ImageCursorScale";
import { useAnimationFrame, useMotionValue } from "motion/react";

const Product = () => {
  const products = [
    "/images/product1.jpg",
    "/images/product2.jpg",
    "/images/product3.jpeg",
    "/images/product4.jpg",
    "/images/product5.jpg",
    "/images/product6.jpg",
    "/images/product7.jpg",
    "/images/product8.jpg",
    "/images/product9.jpg",
    "/images/product10.png",
    "/images/product11.jpeg",
    "/images/product12.png",
  ];


  const containerRef = useRef()

  useAnimationFrame(() => {
    const el = containerRef.current;
    if (!el) return;

    el.scrollLeft += 1.2; 

    const scrollWidth = el.scrollWidth;
    const scrollMid = scrollWidth / 3;

    if (el.scrollLeft >= scrollMid * 2) {
      el.scrollLeft = 0;
    }
  });

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.scrollLeft = el.scrollWidth / 3;
    }
  }, []);

  return (
    <section className="relative z-20 w-full min-h-screen bg-black text-white">
      <div className="grid grid-cols-2 px-8 py-12 sm:py-32 gap-y-2 sm:gap-y-6">
        <h2 className="text-5xl sm:text-8xl col-span-2 font-semibold">
          PENERAPAN
        </h2>
        <h2 className="text-5xl sm:text-8xl font-semibold text-left sm:text-right">
          HASIL FOTO
        </h2>
        <h2 className="text-5xl sm:text-8xl font-semibold text-right">{products.length.toString().padStart(2, '0')}</h2>
      </div>

      <div ref={containerRef} className="flex overflow-x-auto px-8 py-12 gap-x-12">
        {products.map((productUrl) => (
          <ImageCursorScale url={productUrl} />
        ))}
      </div>
    </section>
  );
};

export default Product;
