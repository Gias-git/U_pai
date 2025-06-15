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
      className="flex justify-between gap-3 items-center p-4 rounded-2xl text-white min-w-[260px] md:min-w-[320px] lg:min-w-[170px] xl:w-1/5 h-[120px] shadow-lg overflow-hidden"
      style={{ background }}
    >
      <div className="w-2/3">
        <h3 className="mb-1 text-base font-semibold text-black">{title}</h3>
        <p className="text-sm text-gray-700 leading-tight">{description}</p>
      </div>
      <div className="flex items-center justify-center w-1/3">
        <Image
          src={imageUrl}
          alt={`${title} service`}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
