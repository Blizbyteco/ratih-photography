import React from "react";
import TextSlide from "@/components/ui/TextSlide";
import LabeledText from "@/components/ui/LabeledText";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getCurrentTime, getStatusShop } from "../../utils/time";

const Footer = () => {

  return (
    <footer className="border-t border-gray-400 pt-18 pb-4 z-20 w-full min-h-[120vh] sm:min-h-screen bg-black text-white relative">
      <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-4 gap-x-16 gap-y-8 px-6 sm:px-16">
        <div className="flex flex-col items-start justify-between row-span-2">
         <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3958.658379053664!2d113.486908!3d-7.165432999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDknNTUuNiJTIDExM8KwMjknMTIuOSJF!5e0!3m2!1sid!2sid!4v1749969636067!5m2!1sid!2sid" className="border-none w-full h-[400px]  md:w-[320px] md:h-[300px]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <img
            src="/images/logo-light.svg"
            alt="logo"
            className="w-[200px] hidden sm:block"
            loading="lazy"
          />
        </div>

        {/* navigations */}
        <div className="flex flex-col">
          <p className="text-sm">(NAVIGATION)</p>
          <div className="mt-4 space-y-0 sm:space-y-4">
            <TextSlide to="/gallery" text="Galeri" />
            <TextSlide to="/service" text="Layanan" />
            <TextSlide to="/course" text="Kelas" />
            <div onClick={() => window.location.href = `https://wa.me/+6281939334000`}>
              <TextSlide text="Hubungi Kami" />
            </div>
          </div>
        </div>

        <div className="hidden sm:block"></div>

        <div className="flex flex-col mt-12">
          <p className="text-sm">(INFORMASI)</p>
          <div className="mt-4 space-y-4 flex flex-col justify-start">
            <LabeledText
              title="Lokasi"
              content="jln. Veteran gg 6 no.20 Pamekasan, madura."
              icon={
                <Icon
                  icon="heroicons:map-pin-16-solid"
                  width="16"
                  height="16"
                />
              }
            />

            <LabeledText
              icon={
                <Icon
                  icon="ant-design:instagram-filled"
                  width="16"
                  height="16"
                />
              }
              title="Instagram"
              content="@nikratih"
            />
            <LabeledText
              icon={
                <Icon
                  icon="ant-design:whats-app-outlined"
                  width="16"
                  height="16"
                />
              }
              title="WhatsApp"
              content="081939334000"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-6 sm:px-16 py-6 flex flex-col gap-y-2 mt-12">
        <div className="min-w-full flex justify-between items-center">
          <p className="font-medium text-white text-sm">Instagram</p>
          <p className="font-medium text-white text-sm">Gmail</p>
          <p className="font-medium text-white text-sm">Facebook</p>
          <p className="font-medium text-white text-sm">WhatsApp</p>
        </div>

        <div className="flex justify-between items-center min-w-full">
          <p className="font-medium text-white text-xs sm:text-sm">
            © 2025 Blizbyteco, All Right Reserved
          </p>
          <p className="font-medium text-white text-xs sm:text-sm">
            {getCurrentTime()} - {getStatusShop() ? "WE ARE OPENED" : "WE ARE CLOSED"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
