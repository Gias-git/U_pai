"use client"

import { Search } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BsMessenger, BsShop } from 'react-icons/bs';
import { TbCoinTaka } from 'react-icons/tb';

 const searchPlaceholders = [
        'Search for "medicine products"',
        'Search for "vitamins & supplements"',
        'Search for "diabetes care"',
        'Search for "baby products"',
    ];


const HeaderForSmall: React.FC = () => {
   
      const [placeholderIndex, setPlaceholderIndex] = useState(0);

     // Cycle placeholder text every 3 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return <div className='pb-4 shadow-sm'>
        {/* TOP BAR */}
        <div className='flex justify-between items-center py-3 px-4'>
            {/* Logo */}
            <div className="flex items-center gap-2">
                <Image src="/logo.webp" alt="Arogga" width={130} height={80} />
            </div>


            <div className='flex gap-5'>
                {/* Balance container */}
                <div>
                    <p className='flex justify-center items-center gap-2'><TbCoinTaka></TbCoinTaka> 0.00</p>
                </div>

                {/* Messenger Container */}
                <div>
                    <BsMessenger></BsMessenger>
                </div>

                {/* shop icon */}
                <div>
                    <BsShop></BsShop>
                </div>
            </div>
        </div>


        {/* Bottom Bar */}

        <div>
            {/* Search Bar */}
            <div className="flex flex-1 max-w-2xl mx-4">
                <div className="flex w-full bg-[#F7FAFC] rounded-xl overflow-hidden">
                  

                    {/* Input */}
                    <input
                        type="text"
                        placeholder={searchPlaceholders[placeholderIndex]}
                        className="w-full px-4 py-2 bg-[#E5F3F3] outline-none placeholder:text-gray-500 transition-all duration-300"
                    />

                    {/* Search Button */}
                    <button className="px-4 bg-teal-700 text-white flex items-center justify-center">
                        <Search className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    </div>;
};

export default HeaderForSmall;