import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: { id: string; slug: string };
  searchParams: { pv_id?: string; category?: string; subcategory?: string };
}

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


// Fetch from public folder
async function getProduct(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/ProductDetails.json`);

  if (!res.ok) throw new Error("Failed to fetch product data");

  const products: Product[] = await res.json();
  const product = products.find((item) => item.id === id);
  if (!product) return null;

  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    price: product.newPrice,
    oldPrice: product.oldPrice,
    image: product.imageSrc,
    deliveryTime: product.deliveryTime,
    category: product.category,
    subcategory: product.subcategory,
    description: product.description,
    discountPercent: product.discountPercent,
    shelfLifeManagement: product.shelfLifeManagement,
    finish: product.finish,
    benefits: product.benefits,
    texture: product.texture,
    color: product.color,
    type: product.type,
    sensitiveCategories: product.sensitiveCategories,
    tariffType: product.tariffType,
    ingredients: product.ingredients,
    offers: [
      {
        text: `Discount ${product.discountPercent}%`,
        condition: `Old Price ৳${product.oldPrice}`,
      },
    ],
  };
}




export default async function ProductDetailsPage({ params }: Props) {
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
              {product.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </Link> /
          </li>
          <li>
            <Link href={`/${product.category}/${product.subcategory}`}>
              {product.subcategory.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </Link> /
          </li>
          <li><span className="text-gray-700">{product.name}</span></li>
        </ol>
      </nav>

      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4 group overflow-hidden">
          <div className="overflow-hidden rounded-md">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="mx-auto transform transition-transform duration-300 group-hover:scale-110 hover:transform hover:translate-x-5"

            />
          </div>
          <div className="mt-4 text-gray-600 text-sm">⏱ {product.deliveryTime}</div>
        </div>


        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-lg font-semibold text-green-600">৳ {product.price}</span>
            <span className="text-sm line-through text-gray-400">৳ {product.oldPrice}</span>
            <span className="text-sm text-red-500">{product.discountPercent}% OFF</span>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mb-4">
            Add to Cart
          </button>

          <h2 className="font-semibold mb-2">Additional Offers</h2>
          <div className="flex gap-4 flex-wrap">
            {product.offers.map((offer, idx) => (
              <div
                key={idx}
                className="bg-orange-100 text-orange-700 p-3 rounded shadow text-sm"
              >
                <p className="font-semibold">{offer.text}</p>
                <p>{offer.condition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        {/* Product Details Info Box */}
        <div className="mt-6 border rounded-md p-4 bg-gray-50">
          <h4 className="text-md font-semibold mb-2">Product Details</h4>
          <div className="text-sm text-gray-700 space-y-1">
            <p><strong>Details:</strong> {product.description}</p>
            <p><strong>Shelf Life Management Yes/No:</strong> {product.shelfLifeManagement}</p>
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

    </div>
  );
}
