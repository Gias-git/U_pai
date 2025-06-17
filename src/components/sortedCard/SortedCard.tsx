"use client";
import { usePathname } from "next/navigation";
import React from "react";

const capitalize = (str: string) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const SortedCard = () => {
  const pathname = usePathname(); // e.g. "/medicine/antimicrobial"
  const pathParts = pathname.split("/").filter((part) => part); // ["medicine", "antimicrobial"]
  const dynamicTitle = pathParts.length > 0 ? capitalize(pathParts[pathParts.length - 1]) : "All Products";

  return (
    <div className="flex items-center justify-between px-4 mb-10 rounded-xl border border-gray-200 py-6 bg-white w-full mx-auto">
      <h2 className="text-lg font-semibold text-black">{dynamicTitle}</h2>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500">Sort by:</span>
        <select className="border border-gray-300 rounded-md px-3 py-1 text-sm text-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-500">
          <option value="">Select an option</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="name-a-z">Name: A-Z</option>
          <option value="name-z-a">Name: Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default SortedCard;
