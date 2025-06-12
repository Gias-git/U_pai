"use client";
import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, PhoneCall } from "lucide-react";

const categories = [
  "Home",
  "Medicine",
  "Lab Test",
  "Healthcare",
  "Beauty",
  "Sexual Wellness",
  "Baby & Mom Care",
  "Herbal",
  "Home Care",
  "Supplement",
  "Food and Nutrition",
  "Food and Nutrition",
  "Food and Nutrition",
  "Food and Nutrition",
];

const CategoryNavbar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Check scroll position to toggle arrow visibility
  const checkScrollPosition = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1); // small tolerance for float
  };

  // Scroll right
  const handleRightArrowClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Scroll left
  const handleLeftArrowClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // Add scroll event listener to update arrows visibility on manual scroll (e.g. mouse or touch)
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    scrollEl.addEventListener("scroll", checkScrollPosition);
    // Initial check
    checkScrollPosition();

    return () => scrollEl.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <nav   id="category-navbar" className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
      {/* Shop By Category */}
      <div className="flex items-center gap-2 text-teal-700 font-semibold w-2/12 cursor-pointer flex-shrink-0">
        <div className="w-4 h-4 grid grid-cols-2 gap-[2px]">
          <div className="w-2 h-2 bg-teal-700" />
          <div className="w-2 h-2 bg-teal-700" />
          <div className="w-2 h-2 bg-teal-700" />
          <div className="w-2 h-2 bg-teal-700" />
        </div>
        <span>Shop By Category</span>
      </div>
      

      {/* Left Side */}
      <div className="flex items-center gap-6 w-8/12 overflow-hidden  ">


        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={handleLeftArrowClick}
            className="p-2 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-100 flex-shrink-0"
            aria-label="Scroll Left"
          >
            <ArrowLeft className="w-4 h-4 text-black" />
          </button>
        )}

        {/* Scrollable Categories */}
        <div
          ref={scrollRef}
          className="flex items-center gap-6 overflow-x-auto no-scrollbar whitespace-nowrap flex-grow"
          style={{ scrollBehavior: "smooth" }}
        >
          {categories.map((category, idx) => (
            <span
              key={idx}
              className="text-sm text-gray-600 hover:text-teal-700 cursor-pointer whitespace-nowrap"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-between items-center w-2/12 gap-2 ml-4">
        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={handleRightArrowClick}
            className="p-2 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-100"
            aria-label="Scroll Right"
          >
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        )}

        {/* Call for Order */}
        <button className="flex  items-center gap-2 px-3 py-1.5 bg-red-50 text-red-600 rounded-md text-sm font-semibold hover:bg-red-100 transition">
          <PhoneCall className="w-4 h-4" />
          Call for Order
        </button>
      </div>
    </nav>
  );
};

export default CategoryNavbar;
