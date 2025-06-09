import React from "react";
import OfferCard from "./OfferCard";
import { BsWhatsapp, BsReceipt, BsShop, BsHeadphones } from "react-icons/bs";
import { FaFlask, FaFirstAid } from "react-icons/fa";

const offerData = [
  {
    icon: <BsWhatsapp size={22} />,
    iconBgColor: "bg-green-500",
    cardBgClass: "bg-gradient-to-br from-green-200 to-green-300",
    topText: "Order",
    mainText: "Via WhatsApp",
    subText: "01810117100",
    buttonText: "Call Now",
    buttonTextColor: "text-green-600",
    href: "tel:01810117100",
  },
  {
    icon: <BsReceipt size={22} />,
    iconBgColor: "bg-cyan-500",
    cardBgClass: "bg-gradient-to-br from-cyan-200 to-cyan-300",
    topText: "UPTO",
    mainText: "10% OFF",
    subText: "+ Cashback",
    buttonText: "Upload Prescription",
    buttonTextColor: "text-cyan-600",
    href: "/upload-prescription",
  },
  {
    icon: <BsShop size={22} />,
    iconBgColor: "bg-lime-500",
    cardBgClass: "bg-gradient-to-br from-lime-200 to-lime-400",
    topText: "UPTO",
    mainText: "14% OFF",
    subText: "+ Cashback",
    buttonText: "Register Pharmacy",
    buttonTextColor: "text-lime-600",
    href: "/register-pharmacy",
  },
  {
    icon: <FaFirstAid size={22} />,
    iconBgColor: "bg-violet-500",
    cardBgClass: "bg-gradient-to-br from-violet-200 to-violet-300",
    topText: "UPTO",
    mainText: "60% OFF",
    subText: "+ Cashback",
    buttonText: "HealthCare",
    buttonTextColor: "text-violet-600",
    href: "/healthcare",
  },
  {
    icon: <BsHeadphones size={22} />,
    iconBgColor: "bg-orange-500",
    cardBgClass: "bg-gradient-to-br from-orange-200 to-orange-300",
    topText: "UPTO",
    mainText: "10% OFF",
    subText: "16778",
    buttonText: "Call To Order",
    buttonTextColor: "text-orange-600",
    href: "tel:16778",
  },
  {
    icon: <FaFlask size={20} />,
    iconBgColor: "bg-red-500",
    cardBgClass: "bg-gradient-to-br from-red-200 to-red-300",
    topText: "UPTO",
    mainText: "25% OFF",
    buttonText: "Lab Test",
    buttonTextColor: "text-red-600",
    href: "/lab-test",
  },
];

const OffersSection: React.FC = () => {
  return (
    <div>
      <h1 className="text-black text-center text-4xl uppercase font-medium mb-12">
        Especially For You
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {offerData.map((offer) => (
          <OfferCard key={offer.mainText} {...offer} />
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
