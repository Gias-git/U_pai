"use client";

import React, { useEffect, useState } from "react";
import { Search, ChevronDown, User2 } from "lucide-react";
import Image from "next/image";
import LoginModal from "../Modals/LoginModal";

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
  const [placeholderIndex, setPlaceholderIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Cycle placeholder text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.webp"
          alt="Arogga Logo"
          width={160}
          height={60}
          priority
        />
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 max-w-2xl mx-4">
        <div className="flex w-full bg-[#F7FAFC] rounded-xl overflow-hidden">
          {/* Dropdown */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="h-full px-4 py-2 pr-8 text-sm font-semibold text-gray-700 bg-transparent outline-none appearance-none"
              aria-label="Select category"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute top-1/2 right-2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder={searchPlaceholders[placeholderIndex]}
            className="w-full px-4 py-2 bg-[#E5F3F3] outline-none placeholder:text-gray-500"
            aria-label="Search input"
          />

          {/* Search Button */}
          <button
            className="px-4 bg-teal-700 text-white flex items-center justify-center"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* User Section */}
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 cursor-pointer"
        role="button"
        aria-label="Open account modal"
      >
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <User2 className="w-4 h-4 text-gray-600" />
        </div>
        <div className="text-sm leading-tight">
          <p className="text-gray-600">Hello, User</p>
          <p className="font-semibold text-black">Account & Orders</p>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
