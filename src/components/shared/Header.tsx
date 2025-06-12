"use client";
import React, { useEffect, useState } from "react";
import { Search, ChevronDown, User2 } from "lucide-react";
import Image from "next/image";

const searchPlaceholders = [
  'Search for "medicine products"',
  'Search for "vitamins & supplements"',
  'Search for "diabetes care"',
  'Search for "baby products"',
];

const categories = [
  "All",
  "Medicines",
  "Healthcare",
  "Baby Products",
  "Personal Care",
];

const Header: React.FC = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Cycle placeholder text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.webp" alt="Arogga" width={200} height={80} />
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 max-w-2xl mx-4">
        <div className="flex w-full bg-[#F7FAFC] rounded-xl overflow-hidden">
          {/* Dropdown using select */}
          <div className="relative flex items-center">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 pr-8 text-sm font-semibold text-gray-700 bg-transparent appearance-none outline-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 w-4 h-4 text-gray-600 pointer-events-none" />
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder={searchPlaceholders[placeholderIndex]}
            className="w-full px-4 py-2 bg-[#E5F3F3] outline-none placeholder:text-gray-500 transition-all duration-300"
          />

          {/* Search Button */}
          <button className="px-4 bg-teal-700 text-white flex items-center justify-center">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* User Section */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <User2 className="w-4 h-4 text-gray-600" />
        </div>
        <div className="text-sm leading-tight">
          <p className="text-gray-600">Hello, User</p>
          <p className="font-semibold text-black">Account & Orders</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
