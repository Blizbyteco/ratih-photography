import React, { useState } from "react";
import Button from "./Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";



export default function PricingCard({ title, price, features, text }) {

  const [hovered, setHovered] = useState(false)

  const clickHandler = () => {
    window.location.href = `https://wa.me/+6281939334000`
  }

  return (
    <motion.div
      className=" py-12 px-4 border-[0.5px] border-gray-800 rounded-md bg-blur backdrop-blur-xl  bg-radial-[at_center_center] from-amber-500/20 from-20% to-black to-90% hover:shadow-[2px_4px_6px_1px] hover:shadow-amber-500/60 hover:cursor-pointer transition-shadow duration-500 ease-in hover:transition-shadow hover:duration-500 hover:ease-out"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <h2 className="text-3xl font-bold mb-2 text-white">{title}</h2>
      <p className="text-1xl font-semibold text-gray-400 mb-4 mt-3">{price}</p>
      <div className="text-white space-y-2 mt-10">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-x-2">
            <Icon  icon="heroicons:check"/>
            <span >{feature}</span>
          </div>
        ))}
      </div>
      <Button className="mt-10" text={text} groupHovered={hovered} onClick={clickHandler}/>
    </motion.div>
  );
}
