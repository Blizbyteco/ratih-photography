import React from "react";
import TextSlide from "@/components/ui/TextSlide";
import LabeledText from "@/components/ui/LabeledText";

const Footer = () => {

    const time = new Date()

    const hour = time.getHours()
    const minute = time.getMinutes()


    return (
        <footer className="border-t border-gray-400 py-18 z-20 w-full min-h-[95vh] bg-black text-white relative">
            <div className="grid grid-rows-2 grid-cols-4 gap-x-16 px-16">
                <div className="flex flex-col items-start justify-between row-span-2">
                    <img
                        src="/images/studio.jpeg"
                        alt="studio"
                        className="w-[300px]"
                    />
                    <img src="/images/logo-light.svg" alt="logo" className="w-[200px]" />
                </div>

                {/* navigations */}
                <div className="flex flex-col">
                    <p className="text-sm">(NAVIGATION)</p>
                    <div className="mt-4 space-y-4">
                        <TextSlide text="Galeri" />
                        <TextSlide text="Layanan" />
                        <TextSlide text="Kursus" />
                        <TextSlide text="Hubungi Kami" />
                    </div>
                </div>

                <div></div>

                <div className="flex flex-col">
                    <p className="text-sm">(INFORMASI)</p>
                    <div className="mt-4 space-y-4 flex flex-col justify-start">
                        <LabeledText
                            title="Lokasi"
                            content="jln. Veteran gg 6 no.20 Pamekasan, madura."
                        />
                        <LabeledText title="Email" content="nik.ratih99@gmail.com" />
                        <LabeledText title="Instagram" content="@nikratih" />
                        <LabeledText
                            title="WhatsApp"
                            content="081939334000"
                        />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-1 left-0 w-full px-16 flex flex-col gap-y-2 ">

                <div className="min-w-full flex justify-between items-center">
                    <p className="font-medium text-white text-sm">Instagram</p>
                    <p className="font-medium text-white text-sm">Gmail</p>
                    <p className="font-medium text-white text-sm">Facebook</p>
                    <p className="font-medium text-white text-sm">WhatsApp</p>
                </div>

                <div className="flex justify-between items-center min-w-full">
                    <p className="font-medium text-white text-sm">© 2025 Blizbyteco, All Right Reserved</p>
                    <p className="font-medium text-white text-sm">{`${hour}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`} - WE ARE CLOSED</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer