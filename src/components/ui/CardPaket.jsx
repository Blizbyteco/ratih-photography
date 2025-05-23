import React from "react";
import Button from "./Button";

export default function CardPaket({ title, price, features, text }) {
  return (
    <div
      className="bg-black py-12 px-4 border-[0.5px] "
      style={{ filter: "drop-shadow(6px 9px 10px rgba(255, 140, 0, 0.7))" }}
    >
      <h2 className="text-3xl font-bold mb-2 text-white">{title}</h2>
      <p className="text-1xl font-semibold text-gray-400 mb-4 mt-3">{price}</p>
      <ul className="text-white space-y-2 mt-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="mt-10" text={text} />
    </div>
  );
}
