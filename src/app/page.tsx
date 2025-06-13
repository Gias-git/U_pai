"use client";

// import OurProducts from "@/components/OurProducts";
import CategoryGridSection from "@/components/CategoryGridSection";
import HowToOrderSection from "@/components/HowToOrderSection";
import ImageSlider from "@/components/ImageSlider";
import OffersSection from "@/components/OffersSection";
import OurProducts from "@/components/OurProducts";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
 

  return (
    <main className="min-h-screen">
      <section className="w-11/12 mx-auto my-10">
        

          <ImageSlider />
      </section>

      {/* Services Section */}
      <section className=" mx-auto w-full mb-10 ">
        <ServicesSection />
      </section>

      {/* Offers Section */}
      <section className="w-11/12 mx-auto mb-24">
        <OffersSection />
      </section>

      {/* How To Order Section */}
      <section className="mb-24">
        <HowToOrderSection />
      </section>

      {/* Our Product Section */}
      <section className="w-11/12 lg:container mx-auto my-24">
        <OurProducts />
      </section>

      {/* Category Grid Section */}
      <section className="my-24">
        <CategoryGridSection />
      </section>
    </main>
  );
}
