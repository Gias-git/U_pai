'use client';

import { Suspense } from 'react';
import Image from "next/image";
import medicine from "@/assets/medicine.webp";
import SubCategoryCards from "@/components/CategoryPageSubCatagoryCard/SubCategoryCards";
import Breadcrumb from "@/components/breadcrumb_navigation/Breadcrumb";
import SortedCard from "@/components/sortedCard/SortedCard";
import ProductGrid from "@/components/ProductCard/ProductGrid";
import { products } from "@/app/medicine/products";
import GlobalLoader from '@/components/GlobalLoader/GlobalLoader';


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
