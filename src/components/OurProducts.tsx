import React from "react";
import ProductCard from "./ProductCard";

const OurProducts = () => {
  const vegetables = [
    {
      name: "Carrot",
      discountedPrice: 20,
      mainPrice: 30,
      rating: 4.5,
    },
    {
      name: "Tomato",
      discountedPrice: 18,
      mainPrice: 25,
      rating: 4.2,
    },
    {
      name: "Spinach",
      discountedPrice: 15,
      mainPrice: 20,
      rating: 4.7,
    },
    {
      name: "Potato",
      discountedPrice: 22,
      mainPrice: 28,
      rating: 4.3,
    },
    {
      name: "Cabbage",
      discountedPrice: 25,
      mainPrice: 32,
      rating: 4.0,
    },
    {
      name: "Broccoli",
      discountedPrice: 30,
      mainPrice: 40,
      rating: 4.6,
    },
    {
      name: "Cauliflower",
      discountedPrice: 27,
      mainPrice: 35,
      rating: 4.1,
    },
    {
      name: "Cauliflower",
      discountedPrice: 27,
      mainPrice: 35,
      rating: 4.1,
    },
    {
      name: "Cauliflower",
      discountedPrice: 27,
      mainPrice: 35,
      rating: 4.1,
    },
    {
      name: "Cauliflower",
      discountedPrice: 27,
      mainPrice: 35,
      rating: 4.1,
    },
    {
      name: "Cauliflower",
      discountedPrice: 27,
      mainPrice: 35,
      rating: 4.1,
    },
    {
      name: "Cauliflower",
      discountedPrice: 27,
      mainPrice: 35,
      rating: 4.1,
    },
  ];

  return (
    <div className="text-black">
      <div className="mb-12">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <div></div>
      </div>

      {/* All Products */}
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  gap-8">
          {vegetables.map((product, index) => <ProductCard key={index} Product={product} />)}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
