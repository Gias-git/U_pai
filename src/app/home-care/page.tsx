import Image from "next/image";
import labTest from "@/assets/labTest.png";
import SubCategoryCards from "@/components/CategoryPageSubCatagoryCard/SubCategoryCards";
import Breadcrumb from "@/components/breadcrumb_navigation/Breadcrumb";
import SortedCard from "@/components/sortedCard/SortedCard";
import ProductGrid from "@/components/ProductCard/ProductGrid";
import { products } from "@/app/medicine/products";

export default function HomeCare() {
  return (
    <div className="min-h-screen w-11/12 mx-auto">
      {/* breadcrumb navigation */}
      <div className="py-6">
        <Breadcrumb></Breadcrumb>
        {/* Your page content here */}
      </div>

      <div>
        <SortedCard></SortedCard>
      </div>

      {/* Image Section */}
      <div className="">
        <Image
          src={labTest}
          alt="Picture of the author"
          className="rounded-3xl"
        ></Image>

        <div>
          <SubCategoryCards></SubCategoryCards>
        </div>

        <div className="my-10">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
