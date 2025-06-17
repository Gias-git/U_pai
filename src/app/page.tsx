'use client';

import { Suspense, lazy } from 'react';
import { products } from '@/app/medicine/products';
import GlobalLoader from '@/components/GlobalLoader/GlobalLoader';

// Lazy load components
const ImageSlider = lazy(() => import('@/components/ImageSlider'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const OffersSection = lazy(() => import('@/components/OffersSection'));
const HowToOrderSection = lazy(() => import('@/components/HowToOrderSection'));
const CategoryGridSection = lazy(() => import('@/components/CategoryGridSection'));
const FlashSale = lazy(() => import('@/components/FlashSale/FlashSale'));

// Flash sale dummy data
const flashSalesData = [
  { title: 'Defend Against Covid-19', bgColor: 'bg-blue-200' },
  { title: 'Shop Your Glow 🌟', bgColor: 'bg-white' },
  { title: 'Shop Your Glow 🌟', bgColor: 'bg-yellow-100' },
  { title: 'Clean & Save 🧹', bgColor: 'bg-white' },
  { title: 'Spice Up 🌶️', bgColor: 'bg-[#FFD3D3]' },
];



export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<GlobalLoader />}>
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
      </Suspense>
    </main>
  );
}
