"use client";

import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const sharedImage =
  "https://i.ibb.co/vC3NX9wB/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTI3-LVdlb-Gxu-ZXNz-LV.webp";

const categories = [
  {
    name: "Flash Sale",
    label: "1000+",
    highlight: true,
    image: "https://i.ibb.co/hRKVY78X/img-icons8.png",
  },
  {
    name: "Medicine",
    image:
      "https://i.ibb.co/vx0xgG4Y/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JUYXhvbm9te-S10-X2-Jhbm5lclwv-Nj-My-Mlwv-Nj-My-Mi1-NZWR.webp",
  },
  {
    name: "Lab Test",
    image:
      "https://i.ibb.co/MkPFrg3T/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JNZW51-SXRlb-S1ta-V9sb2dv-XC8x-Mz-Yy-XC8x-Mz-Yy-LUxf-SU.webp",
  },
  {
    name: "Healthcare",
    image:
      "https://i.ibb.co/pvV3Sys7/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JUYXhvbm9te-S10-X2-Jhbm5lclwv-NTk4-N1wv-NTk4-Ny1o-ZXRo.webp",
  },
  {
    name: "Beauty",
    image:
      "https://i.ibb.co/XfHqQ3v2/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JUYXhvbm9te-S10-X2-Jhbm5lclwv-Njk3-OVwv-Njk3-OS1-NYWtld.webp",
  },
  {
    name: "Sexual Wellness",
    image:
      "https://i.ibb.co/pjzB4mMf/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JUYXhvbm9te-S10-X2-Jhbm5lclwv-Nj-Mw-NFwv-Nj-Mw-NC1-TZXh.webp",
  },
  {
    name: "Baby & Mom Care",
    image:
      "https://i.ibb.co/yFVnN5BJ/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JUYXhvbm9te-S10-X2-Jhbm5lclwv-Nz-E1-NVwv-Nz-E1-NS1hc2-Q.webp",
  },
  {
    name: "Herbal",
    image:
      "https://i.ibb.co/nqdjV2K4/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JUYXhvbm9te-S10-X2-Jhbm5lclwv-Nj-E3-NFwv-Nj-E3-NC1o-ZXJ.webp",
  },
  {
    name: "Home Care",
    image:
      "https://i.ibb.co/T3smYGy/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JUYXhvbm9te-S10-X2-Jhbm5lclwv-MTA2-Mz-Jc-Lz-Ew-Nj-My-LU.webp",
  },
  {
    name: "Supplement",
    image:
      "https://i.ibb.co/xKLHvqVq/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JUYXhvbm9te-S10-X2-Jhbm5lclwv-NTk4-OVwv-NTk4-OS1-DTEEt.webp",
  },
  {
    name: "Food and Nutrition",
    image:
      "https://i.ibb.co/7P6PyzJ/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JUYXhvbm9te-S10-X2-Jhbm5lclwv-Nz-I3-Nlwv-Nz-I3-Ni1-Gb29.webp",
  },
  {
    name: "Pet Care",
    image:
      "https://i.ibb.co/d0LTTYyV/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JUYXhvbm9te-S10-X2-Jhbm5lclwv-Nz-My-N1wv-Nz-My-Ny1w-ZXR.webp",
  },
  {
    name: "Veterinary",
    image:
      "https://i.ibb.co/fdwRz1GZ/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JUYXhvbm9te-S10-X2-Jhbm5lclwv-Nzc1-NFwv-Nzc1-NC12-ZXRlc.webp",
  },
  {
    name: "Homeopathy",
    image:
      "https://i.ibb.co/gZVdKHsn/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JUYXhvbm9te-S10-X2-Jhbm5lclwv-Njk3-OFwv-Njk3-OC1-Ib21lb.webp",
  },
];

export default function LeftsideCategoryContainer() {
  return (
    <div className="text-black w-full bg-white border-r-2 border-gray-100 pl-4 border-2 ">
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
                src={cat.image ? cat.image : sharedImage}
                alt={cat.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span
                className={`${
                  cat.highlight ? "font-bold text-sm text-red-600" : "text-base"
                }`}
              >
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
