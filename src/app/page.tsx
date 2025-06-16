"use client";

import CategoryGridSection from "@/components/CategoryGridSection";
import FlashSale from "@/components/FlashSale/FlashSale";
import HowToOrderSection from "@/components/HowToOrderSection";
import ImageSlider from "@/components/ImageSlider";
import OffersSection from "@/components/OffersSection";
import ServicesSection from "@/components/ServicesSection";
import { products } from "@/app/medicine/products";

// JSON array with flash sale info
const flashSalesData = [
  {
    title: "Defend Against Covid-19",
    bgColor: "bg-blue-100",
  },
  {
    title: "Shop Your Glow 🌟",
    bgColor: "bg-white",
  },
  {
    title: "Shop Your Glow 🌟",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Clean & Save 🧹",
    bgColor: "bg-white",
  },
  {
    title: "Spice Up 🌶️",
    bgColor: "bg-[#FFD3D3]",
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="w-full md:w-11/12 mx-auto my-10">
        <ImageSlider />
      </section>

      <section className="mx-auto w-full mb-10 ">
        <ServicesSection />
      </section>

      <section className="w-11/12 mx-auto mb-24">
        <OffersSection />
      </section>

      <section className="mb-24">
        <HowToOrderSection />
      </section>

      {/* Render FlashSale components dynamically */}
      {flashSalesData.map(({ title, bgColor }, index) => (
        <FlashSale
          key={index}
          title={title}
          bgColor={bgColor}
          products={products}
        />
      ))}

      <section className="my-24">
        <CategoryGridSection />
      </section>
    </main>
  );
}
