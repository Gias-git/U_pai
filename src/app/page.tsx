"use client";

// import OurProducts from "@/components/OurProducts";
import { Banner } from "@/components/Banner";
import CategoryGridSection from "@/components/CategoryGridSection";
import HowToOrderSection from "@/components/HowToOrderSection";
import ImageSlider from "@/components/ImageSlider";
import OffersSection from "@/components/OffersSection";
import OurProducts from "@/components/OurProducts";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  const bannerImages = [
    {
      src: "https://i.ibb.co/NdjnQPxc/two-students-studying-together-online-with-laptop-park-1150-4115.jpg",
      alt: "Explore the latest tech gadgets",
      href: "/products",
    },
    {
      src: "https://i.ibb.co/bg8hJ4KG/top-view-unrecognizable-hacker-performing-cyberattack-night-1098-18706.jpg",
      alt: "Get exclusive deals on electronics",
      href: "/deals",
    },
    {
      src: "https://i.ibb.co/WQh3cYS/What-are-the-most-breathtaking-natural-attractions-in-Sylhet.jpg",
      alt: "Join our newsletter for updates",
      href: "/subscribe",
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="w-11/12 mx-auto my-24">
        {/* <Banner images={bannerImages} /> */}

          <ImageSlider />
      </section>

      {/* Services Section */}
      <section className="w-11/12 mx-auto my-24">
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
