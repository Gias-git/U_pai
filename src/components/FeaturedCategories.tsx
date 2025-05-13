import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import FeaturedCategoriesCard from "./FeaturedCategoriesCard";

const FeaturedCategories = () => {
  return (
    <div className="text-black">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Featured Categories</h1>
        <div className="flex gap-4 text-3xl">
          <FaArrowCircleLeft className="cursor-pointer" />
          <FaArrowCircleRight className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <FeaturedCategoriesCard />
        <FeaturedCategoriesCard />
        <FeaturedCategoriesCard />
        <FeaturedCategoriesCard />
        <FeaturedCategoriesCard />
        <FeaturedCategoriesCard />
        <FeaturedCategoriesCard />
        <FeaturedCategoriesCard />
        <FeaturedCategoriesCard />
        <FeaturedCategoriesCard />
      </div>
    </div>
  );
};

export default FeaturedCategories;
