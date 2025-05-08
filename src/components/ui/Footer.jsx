import React from "react";
import TextSlide from "@/components/ui/TextSlide";
import LabeledText from "@/components/ui/LabeledText";

const Footer = () => {
    return (
        <footer className="border-t border-gray-400 py-18 relative z-20 w-full min-h-[95vh] bg-black text-white">
            <div className="grid grid-cols-4 gap-x-16 px-16">
                <div className="flex flex-col items-center">
                    <img
                        src="/images/example8.jpeg"
                        alt="studio"
                        className="w-[300px]"
                    />
                    <img src="/images/logo.svg" alt="logo" className="w-[300px]" />
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
        </footer>
    )
}

export default Footer