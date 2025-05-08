import React from "react";
import Button from "@/components/ui/Button";


const Banner = () => {
    return (
        <section className="relative z-20 w-full min-h-screen bg-black text-white">
            <div className="grid grid-cols-3 px-16 py-32 gap-y-6">
                <div className="col-span-3">
                    <h1 className="text-8xl font-semibold">
                        Mari Ciptakan Visual yang
                    </h1>
                </div>
                <div className="col-span-3">
                    <h1 className="text-8xl font-semibold">Mengunggah selera dan</h1>
                </div>
                <div></div>
                <div className="col-span-2">
                    <h1 className="text-8xl font-semibold">mewakili brand Anda</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <Button text="Hubungi Kami" />
            </div>
        </section>
    )
}

export default Banner