import React from "react";

const SortedCard = () => {
  return (
    <div className="flex items-center justify-between px-4 mb-10 rounded-xl border border-gray-200  py-6 bg-white w-full mx-auto">
      <h2 className="text-lg font-semibold text-black">Medicine</h2>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500">Sort by:</span>
        <select className="border border-gray-300 rounded-md px-3 py-1 text-sm text-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-500">
          <option value="">Select an option</option>
          {/* Add actual sort options here */}
        </select>
      </div>
    </div>
  );
};

export default SortedCard;
