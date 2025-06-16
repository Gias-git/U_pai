import React from "react";
import Image from "next/image";

export interface ProductProps {
  imageSrc: string;
  name: string;
  strength: string;
  discountPercent: number;
  deliveryTime: string;
  oldPrice: number;
  newPrice: number;
}

const ProductCard: React.FC<ProductProps> = ({
  imageSrc,
  name,
  strength,
  discountPercent,
  deliveryTime,
  oldPrice,
  newPrice,
}) => {
  return (
    <div className="relative border min-w-[180px] border-gray-200 rounded-xl p-3 bg-white shadow-sm hover:shadow-md transition">
      {/* Discount Badge */}
      <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md">
        {discountPercent}% OFF
      </div>

      {/* Product Image */}
      <div className="flex justify-center my-2">
        <Image
          src={imageSrc}
          alt={name}
          width={350}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Delivery Info */}
      <div className="flex items-center space-x-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 w-fit rounded-md mb-2">
        <span>⏱</span>
        <span>{deliveryTime}</span>
      </div>

      {/* Product Name */}
      <div className="text-sm mb-1">
        <span className="font-semibold text-black">{name}</span>{" "}
        <span className="text-gray-500">{strength}</span>
      </div>

      {/* Price Section */}
      <div className="flex items-center justify-between mt-2">
        <div className="text-sm">
          <div className="line-through text-gray-400 text-xs">৳{oldPrice}</div>
          <div className="text-black font-semibold">৳{newPrice}</div>
        </div>

        <button className="border border-teal-500 text-teal-600 text-sm font-medium px-3 py-1 rounded-md hover:bg-teal-50 transition">
          ADD
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
