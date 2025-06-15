import Image from "next/image";

interface CategoryCardProps {
  name: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, imageUrl }) => {
  return (
    <div className="flex flex-col items-center justify-start p-3 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-100 h-full">
      <div className="relative w-full h-24">
        <Image
          src={imageUrl}
          alt={`${name} category`}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 10vw"
        />
      </div>

      <p className="mt-2 text-xs md:text-sm font-medium text-gray-800 text-center">
        {name}
      </p>
    </div>
  );
};

export default CategoryCard;
