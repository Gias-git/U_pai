import React from "react";

interface OfferCardProps {
  icon: React.ReactNode;
  iconBgColor: string;
  cardBgClass: string;
  topText?: string; 
  mainText: string;
  subText?: string; 
  buttonText: string;
  buttonTextColor: string;
  href: string;
}

const OfferCard: React.FC<OfferCardProps> = ({
  icon,
  iconBgColor,
  cardBgClass,
  topText,
  mainText,
  subText,
  buttonText,
  buttonTextColor,
  href,
}) => {
  return (
    <a
      href={href}
      className={`relative flex flex-col justify-between w-60 h-64 p-4 rounded-2xl text-slate-800 shadow-md transform hover:scale-105 transition-transform duration-300 ${cardBgClass}`}
    >
      {/* Icon Circle */}
      <div
        className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white ${iconBgColor}`}
      >
        {icon}
      </div>

      {/* Main Content Area */}
      <div className="pt-8">
        {topText && <p className="text-sm font-medium">{topText}</p>}
        <p className="text-3xl font-bold mt-1">{mainText}</p>
        {subText && <p className="text-sm mt-1">{subText}</p>}
      </div>

      {/* Button at the bottom */}
      <div
        className={`w-full py-2 px-4 bg-white rounded-lg text-center font-semibold shadow-sm ${buttonTextColor}`}
      >
        {buttonText}
      </div>
    </a>
  );
};

export default OfferCard;
