import React from "react";

export default function ImageCursorScale({ url }) {
  return (
    <div className="overflow-hidden group max-w-[350px] sm:w-[90%] shrink-0">
      <img
        src={url}
        alt="cursor-image"
        className="size-full object-cover group-hover:scale-110 transition-transform duration-200 ease-out hover:duration-200 hover:ease-in"
        loading="lazy"
      />
    </div>
  );
}
