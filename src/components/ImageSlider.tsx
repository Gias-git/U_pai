"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images: string[] = ["/image1.webp", "/image2.webp", "/image1.webp"];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className=" w-full  mx-auto mt-4 px-4">
      <div
        className="relative w-full aspect-[16/6] group overflow-hidden rounded-xl"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={images[currentIndex]}
          alt={`Slider Image ${currentIndex + 1}`}
          fill
          className="object-fill transition-all duration-500 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 60vw"
        />

        {/* Navigation Buttons */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 mx-1 ${
              index === currentIndex ? "bg-[#beff46]" : "bg-gray-300"
            } rounded-full transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
