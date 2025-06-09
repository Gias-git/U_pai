import React from "react";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    title: "Healthcare",
    description: "Care Comes to You",
    imageUrl:
      "https://i.ibb.co/q3yMjqmc/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTQw-LUdyb3-Vw-LTM5-Nz.webp",
    background: "linear-gradient(105deg, #c4b5fd, #8b5cf6)",
  },
  {
    title: "Arogga Beauty",
    description: "Glamour Delivered, Always Chic",
    imageUrl:
      "https://i.ibb.co/VYK0X05P/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTQw-LUdyb3-Vw-LTM5-Nz.webp",
    background: "linear-gradient(105deg, #fca5a5, #f87171)",
  },
  {
    title: "Lab Test",
    description: "Diagnosing Health, Delivering Hope",
    imageUrl:
      "https://i.ibb.co/1fMKHYdS/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTQw-LUdyb3-Vw-LTM5-Nz.webp",
    background: "linear-gradient(105deg, #5eead4, #14b8a6)",
  },
  {
    title: "Pet and Vet",
    description: "Your Pet's joy non-stop",
    imageUrl:
      "https://i.ibb.co/svZPg58F/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTQw-LUdyb3-Vw-LTM5-Nj.webp",
    background: "linear-gradient(105deg, #93c5fd, #60a5fa)",
  },
  {
    title: "Food",
    description: "Best food for the best health",
    imageUrl:
      "https://i.ibb.co/SwWYnX74/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JCb-G9jay1i-X2-Nvbm-Zp-Z1wv-MFwv-MTQw-LUdyb3-Vw-LTM5-Nz.webp",
    background: "linear-gradient(105deg, #86efac, #4ade80)",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <div className="flex justify-center gap-10 flex-wrap">
      {servicesData.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
          imageUrl={service.imageUrl}
          background={service.background}
        />
      ))}
    </div>
  );
};

export default ServicesSection;
