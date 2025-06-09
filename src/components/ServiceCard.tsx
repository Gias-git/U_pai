import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  background: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
  background,
}) => {
  return (
    <div
      className="flex justify-between items-center p-5 rounded-2xl text-white w-[280px] h-[120px] shadow-lg overflow-hidden"
      style={{ background }}
    >
      <div className="max-w-[60%]">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-sm leading-tight">{description}</p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={`${title} service`}
          width={70}
          height={70}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
