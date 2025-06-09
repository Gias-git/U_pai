import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    name: "Medicine",
    imageUrl:
      "https://i.ibb.co/vC3NX9wB/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LVdlb-Gxu-ZXNz-LV.webp",
  },
  {
    name: "Breakfast, Diet & Nutrition",
    imageUrl:
      "https://i.ibb.co/JjQcd1j9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LUZpd-G5lc3-Mt-U3.webp",
  },
  {
    name: "Glucometers & Diabetic Care",
    imageUrl:
      "https://i.ibb.co/JjQcd1j9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LUZpd-G5lc3-Mt-U3.webp",
  },
  {
    name: "Skincare",
    imageUrl:
      "https://i.ibb.co/JjQcd1j9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LUZpd-G5lc3-Mt-U3.webp",
  },
  {
    name: "Condoms",
    imageUrl:
      "https://i.ibb.co/JjQcd1j9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LUZpd-G5lc3-Mt-U3.webp",
  },
  {
    name: "Baby Personal Care",
    imageUrl:
      "https://i.ibb.co/JjQcd1j9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LUZpd-G5lc3-Mt-U3.webp",
  },
  {
    name: "Natural Care & Wellness",
    imageUrl:
      "https://i.ibb.co/JjQcd1j9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LUZpd-G5lc3-Mt-U3.webp",
  },
  {
    name: "Fitness Supplements",
    imageUrl:
      "https://i.ibb.co/JjQcd1j9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LUZpd-G5lc3-Mt-U3.webp",
  },
  {
    name: "Cat",
    imageUrl:
      "https://i.ibb.co/JjQcd1j9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LUZpd-G5lc3-Mt-U3.webp",
  },
  {
    name: "Snacks & Beverages",
    imageUrl:
      "https://i.ibb.co/JjQcd1j9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LUZpd-G5lc3-Mt-U3.webp",
  },
  {
    name: "Elderly Care",
    imageUrl:
      "https://i.ibb.co/JjQcd1j9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LUZpd-G5lc3-Mt-U3.webp",
  },
  {
    name: "Haircare",
    imageUrl:
      "https://i.ibb.co/JjQcd1j9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LUZpd-G5lc3-Mt-U3.webp",
  },
  {
    name: "Wellness Supplements",
    imageUrl:
      "https://i.ibb.co/JjQcd1j9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LUZpd-G5lc3-Mt-U3.webp",
  },
  {
    name: "Diapering & Pottry",
    imageUrl:
      "https://i.ibb.co/JjQcd1j9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LUZpd-G5lc3-Mt-U3.webp",
  },
  {
    name: "Health & Immunity Boosters",
    imageUrl:
      "https://i.ibb.co/JjQcd1j9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LUZpd-G5lc3-Mt-U3.webp",
  },
  {
    name: "Vitamins and Mineral",
    imageUrl:
      "https://i.ibb.co/JjQcd1j9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LUZpd-G5lc3-Mt-U3.webp",
  },
];

const CategoryGridSection = () => {
  return (
    <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Category</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              imageUrl={category.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGridSection;
