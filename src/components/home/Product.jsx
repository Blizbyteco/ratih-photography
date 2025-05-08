import React from "react";

const Product = () => {
    return (
        <section className="relative z-20 w-full min-h-screen bg-black text-white">
            <div className="grid grid-cols-2 px-8 py-32 gap-y-6">
                <h2 className="text-8xl col-span-2 font-semibold">Produk Unggulan</h2>
                <h2 className="text-8xl font-semibold text-right">Kami</h2>
                <h2 className="text-8xl font-semibold text-right">(06)</h2>
            </div>

            <div className="grid grid-cols-2 px-8 py-12 gap-y-12">
                <img
                    className="w-[90%]"
                    src="/images/example1.jpg"
                    alt="example-photo"
                />
                <img
                    className="w-[90%]"
                    src="/images/example2.png"
                    alt="example-photo"
                />
                <img
                    className="w-[90%]"
                    src="/images/example3.jpg"
                    alt="example-photo"
                />
                <img
                    className="w-[90%]"
                    src="/images/example4.jpg"
                    alt="example-photo"
                />
                <img
                    className="w-[90%]"
                    src="/images/example5.jpg"
                    alt="example-photo"
                />
                <img
                    className="w-[90%]"
                    src="/images/example6.jpg"
                    alt="example-photo"
                />
                <img
                    className="w-[90%]"
                    src="/images/example7.jpg"
                    alt="example-photo"
                />
            </div>
        </section>
    )
}

export default Product