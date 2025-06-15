"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

const Breadcrumb_navigation: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-base text-gray-500 flex items-center space-x-1">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index !== 0 && <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />}
          {item.href ? (
            <Link href={item.href} className="hover:underline text-black font-medium">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-400">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb_navigation;
