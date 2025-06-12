"use client";

import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import { LayoutGrid } from "lucide-react"; // ✅ correct import

const sharedImage =
  "https://i.ibb.co/vC3NX9wB/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LVdlb-Gxu-ZXNz-LV.webp";

const categories = [
  { name: "Flash Sale", label: "1000+", highlight: true },
  { name: "Medicine" },
  { name: "Lab Test" },
  { name: "Healthcare" },
  { name: "Beauty" },
  { name: "Sexual Wellness" },
  { name: "Baby & Mom Care" },
  { name: "Herbal" },
  { name: "Home Care" },
  { name: "Supplement" },
  { name: "Food and Nutrition" },
  { name: "Pet Care" },
  { name: "Veterinary" },
  { name: "Homeopathy" },
  { name: "Wellness" },
  { name: "Fitness" },
  { name: "Organic" },
];

export default function LeftsideCategoryContainer() {
  return (
    <div className="w-full bg-white border-r-2 border-gray-100 pl-4">
      {/* <h3 className="flex items-center gap-2 font-semibold text-green-700 mb-3">
        <LayoutGrid className="w-6 h-6 text-teal-700" /> Shop By Category
      </h3> */}

      <ul className="space-y-2 max-h-[85vh] scroll-thin overflow-y-auto">
        {categories.map((cat, idx) => (
          <li
            key={idx}
            className={`flex items-center justify-between px-3 border-b-[0.5px] border-gray-200 py-1 cursor-pointer hover:bg-gray-100 ${
              cat.highlight ? "border-t pt-3" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={sharedImage}
                alt={cat.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className={`${cat.highlight ? "font-bold text-sm text-red-600" : "text-base"}`}>
                {cat.name}
              </span>
              {cat.label && (
                <span className="ml-1 bg-red-100 text-red-600 px-2 py-0.5 rounded text-base font-semibold">
                  {cat.label}
                </span>
              )}
            </div>
            <FiChevronRight className="h-4 w-4 text-gray-400" />
          </li>
        ))}
      </ul>
    </div>
  );
}
