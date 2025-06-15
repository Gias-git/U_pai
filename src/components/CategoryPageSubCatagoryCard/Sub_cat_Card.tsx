"use client";
import Image from "next/image";
import React from "react";

interface Sub_cat_Card {
  imageSrc: string;
  title: string;
}

const Sub_cat_Card: React.FC<Sub_cat_Card> = ({ imageSrc, title }) => {
  return (
    <div className="  flex flex-col items-center justify-center gap-4 ">
      <div className="bg-[#e9f5f6]  mb-2 rounded-xl shadow-sm hover:shadow-md transition">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={300}
          className="object-contain "
        />
      </div>
      <p className="text-gray-600 font-semibold text-sm">{title}</p>
    </div>
  );
};

export default Sub_cat_Card;
