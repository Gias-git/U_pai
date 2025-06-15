import React from "react";
import ProductCard, { ProductProps } from "./ProductCard";

interface ProductGridProps {
  products: ProductProps[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
