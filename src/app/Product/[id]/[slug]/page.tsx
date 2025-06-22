// File: app/Product/[id]/[slug]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  slug: string;
  name: string;
  strength: string;
  discountPercent: number;
  deliveryTime: string;
  oldPrice: number;
  newPrice: number;
  imageSrc: string;
  category: string;
  subcategory: string;
  description: string;
  shelfLifeManagement: string;
  benefits: string[];
  texture: string;
  type: string;
  color: string;
  sensitiveCategories: string;
  tariffType: string;
  finish: string;
  ingredients: string[];
}

async function getProduct(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/ProductDetails.json`);

  if (!res.ok) throw new Error("Failed to fetch product data");

  const products: Product[] = await res.json();
  return products.find((item) => item.id === id) || null;
}


export default async function Page({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const product = await getProduct(params.id);

  if (!product) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <ol className="list-reset flex flex-wrap gap-1">
          <li><Link href="/">Home</Link> /</li>
          <li>
            <Link href={`/${product.category}`}>
              {product.category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </Link> /
          </li>
          <li>
            <Link href={`/${product.category}/${product.subcategory}`}>
              {product.subcategory.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </Link> /
          </li>
          <li><span className="text-gray-700">{product.name}</span></li>
        </ol>
      </nav>

      {/* Product Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4 group overflow-hidden">
          <Image
            src={product.imageSrc}
            alt={product.name}
            width={300}
            height={300}
            className="mx-auto transition-transform duration-300 group-hover:scale-110"
          />
          <div className="mt-4 text-gray-600 text-sm">⏱ {product.deliveryTime}</div>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-lg font-semibold text-green-600">৳ {product.newPrice}</span>
            <span className="text-sm line-through text-gray-400">৳ {product.oldPrice}</span>
            <span className="text-sm text-red-500">{product.discountPercent}% OFF</span>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mb-4">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8 border rounded-md p-4 bg-gray-50">
        <h4 className="text-md font-semibold mb-2">Product Details</h4>
        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>Details:</strong> {product.description}</p>
          <p><strong>Shelf Life Management:</strong> {product.shelfLifeManagement}</p>
          <p><strong>Finish:</strong> {product.finish}</p>
          <p><strong>Benefits:</strong> {product.benefits.join(", ")}</p>
          <p><strong>Texture:</strong> {product.texture}</p>
          <p><strong>Sensitive Categories:</strong> {product.sensitiveCategories}</p>
          <p><strong>Tariff Type:</strong> {product.tariffType}</p>
          <p><strong>Color:</strong> {product.color}</p>
          <p><strong>Type:</strong> {product.type}</p>
          <p><strong>Ingredients:</strong></p>
          <ul className="list-disc list-inside text-gray-600">
            {product.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
