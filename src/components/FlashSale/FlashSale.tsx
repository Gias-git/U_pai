'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../ProductCard/ProductCard';

interface Product {
  id: number;
  name: string;
  imageSrc: string;
  strength: string;
  discountPercent: number;
  deliveryTime: string;
  oldPrice: number;
  newPrice: number;
}

interface FlashSaleProps {
  title?: string;
  bgColor?: string; // NEW
  products: Product[];
}

export default function FlashSale({
  title = "Flash Sale",
  bgColor = "bg-pink-100",
  products,
}: FlashSaleProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 196;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    handleScroll();
    const current = scrollRef.current;
    current?.addEventListener('scroll', handleScroll);
    return () => current?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`relative px-4 py-10 ${bgColor}`}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-black">{title}</h2>
        <span className="text-sm font-semibold text-red-600 cursor-pointer">See All</span>
      </div>

      <div className="relative">
        {showLeft && (
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
            onClick={() => scroll('left')}
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {showRight && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
            onClick={() => scroll('right')}
          >
            <ChevronRight size={28} />
          </button>
        )}

        <div
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
          ref={scrollRef}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              name={product.name}
              strength={product.strength}
              discountPercent={product.discountPercent}
              deliveryTime={product.deliveryTime}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
