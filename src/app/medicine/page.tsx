'use client';

import { Suspense } from 'react';
import Image from "next/image";
import medicine from "@/assets/medicine.webp";
import dynamic from 'next/dynamic';

import Breadcrumb from "@/components/breadcrumb_navigation/Breadcrumb";
import GlobalLoader from '@/components/GlobalLoader/GlobalLoader';
import { products } from "@/app/medicine/products";

// Lazy-loaded
const SubCategoryCards = dynamic(() => import('@/components/CategoryPageSubCatagoryCard/SubCategoryCards'), {
  // @ts-expect-error - suspense is valid but not in default type definition
  suspense: true
});
const SortedCard = dynamic(() => import('@/components/sortedCard/SortedCard'), {
  // @ts-expect-error - suspense is valid but not in default type definition
  suspense: true
});
const ProductGrid = dynamic(() => import('@/components/ProductCard/ProductGrid'), {
  // @ts-expect-error - suspense is valid but not in default type definition
  suspense: true
});

export default function Medicines() {
  return (
    <Suspense fallback={<GlobalLoader />}>
      <div className="min-h-screen w-11/12 mx-auto">

        {/* Breadcrumb Navigation */}

        <div className="py-6">
          <Breadcrumb />
        </div>


        {/* Sort Filter Section */}

        <div>
          <SortedCard />
        </div>

        {/* Banner Image + Categories + Products */}

        <div>
          <Image
            src={medicine}
            alt="Category Banner"
            className="rounded-3xl w-full h-auto object-cover"
            priority
          />

          <div>
            <SubCategoryCards />
          </div>

          <div className="my-10">
            <ProductGrid products={products} />
          </div>
        </div>

      </div>
    </Suspense>
  );
}
