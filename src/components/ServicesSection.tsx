"use client";
import React, { useRef } from "react";
import ServiceCard from "./ServiceCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const servicesData = [
  {
    title: "Healthcare",
    description: "Care Comes to You",
    imageUrl:
      "https://i.ibb.co/q3yMjqmc/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTQw-LUdyb3-Vw-LTM5-Nz.webp",
    background: "linear-gradient(105deg, #c4b5fd, #8b5cf6)",
  },
  {
    title: "Arogga Beauty",
    description: "Glamour Delivered, Always Chic",
    imageUrl:
      "https://i.ibb.co/VYK0X05P/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTQw-LUdyb3-Vw-LTM5-Nz.webp",
    background: "linear-gradient(105deg, #fca5a5, #f87171)",
  },
  {
    title: "Lab Test",
    description: "Diagnosing Health, Delivering Hope",
    imageUrl:
      "https://i.ibb.co/1fMKHYdS/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTQw-LUdyb3-Vw-LTM5-Nz.webp",
    background: "linear-gradient(105deg, #5eead4, #14b8a6)",
  },
  {
    title: "Pet and Vet",
    description: "Your Pet's joy non-stop",
    imageUrl:
      "https://i.ibb.co/svZPg58F/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTQw-LUdyb3-Vw-LTM5-Nj.webp",
    background: "linear-gradient(105deg, #93c5fd, #60a5fa)",
  },
  {
    title: "Food",
    description: "Best food for the best health",
    imageUrl:
      "https://i.ibb.co/SwWYnX74/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTQw-LUdyb3-Vw-LTM5-Nz.webp",
    background: "linear-gradient(105deg, #86efac, #4ade80)",
  },
];

const ServicesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const scrollByAmount = 270;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDownRef.current = true;
    scrollRef.current?.classList.add("cursor-grabbing");
    startXRef.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeftRef.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDownRef.current = false;
    scrollRef.current?.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDownRef.current = false;
    scrollRef.current?.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDownRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startXRef.current) * 1.5;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
    }
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full ">
      {/* Left Arrow */}
      <button
        className="absolute lg:hidden left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        onClick={scrollLeft}
      >
        <ChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute lg:hidden right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        onClick={scrollRight}
      >
        <ChevronRight />
      </button>

      {/* Scrollable wrapper */}
      <div className="overflow-hidden select-none ">
        <div
          ref={scrollRef}
          className="flex justify-center gap-4 px-8 py-4 cursor-grab overflow-x-auto no-scrollbar scroll-m-1.5 "
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {servicesData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;



