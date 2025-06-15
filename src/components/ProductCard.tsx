"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

interface ProductType {
  name: string;
  discountedPrice: number;
  mainPrice: number;
}

interface CardProps {
  Product: ProductType;
}

const Card: React.FC<CardProps> = ({ Product }) => {
  const { name, discountedPrice, mainPrice } = Product;

  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="border-[#ececec] border-[1px] rounded-[8px] p-[15px] text-black space-y-3">
      {/* Discount Percentage */}
      <div className="bg-[#0baf9a] rounded-lg text-[#fff] text-center w-[50px]">
        25%
      </div>

      {/* Product Image */}
      <div className="flex justify-center">
        <Image
          src="https://i.ibb.co/9zzL051/cat-9.png"
          alt="Red Apple"
          width={400}
          height={400}
          priority
        />
      </div>

      {/* Product Name */}
      <h3 className="text-[#0baf9a] uppercase font-bold">{name}</h3>

      {/* Prices */}
      <div className="flex gap-2 items-center font-bold text-lg">
        <h4 className="text-[#0baf9a]">${discountedPrice}</h4>
        <h5 className="text-[#4a5568] line-through">${mainPrice}</h5>
      </div>

      {/* Quantity Controls + Add to Cart */}
      <div className="flex justify-between mt-6 items-center">
        <div className="flex items-center gap-3">
          <button
            onClick={handleDecrement}
            className="bg-[#0baf9a] text-white p-2 rounded hover:bg-[#088f7f]"
          >
            <FaMinus />
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={handleIncrement}
            className="bg-[#0baf9a] text-white p-2 rounded hover:bg-[#088f7f]"
          >
            <FaPlus />
          </button>
        </div>

        <button
          className="bg-[#0baf9a] text-white py-2 rounded hover:bg-[#088f7f] transition-all duration-200 font-semibold text-center flex justify-center w-[40px]"
          onClick={() => console.log(`Added ${quantity} of ${name} to cart`)}
        >
          <FaCartShopping />
        </button>
      </div>
    </div>
  );
};

export default Card;
