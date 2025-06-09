import React from "react";
import Image from "next/image";

const googlePlayBadgePath = "/google-play.png";
const appStoreBadgePath = "/app-store.png";

const HowToOrderSection: React.FC = () => {
  return (
    <div className="bg-slate-100/70 font-sans py-20 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            আরোগ্য থেকে অর্ডার কিভাবে করবেন?
          </h2>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✔</span>
              <span>প্রেসক্রিপশনের ছবি আপলোড করুন অথবা ঔষধ সার্চ করুন।</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✔</span>
              <span>
                আমাদের A Grade Pharmacist আপনাকে ফোন করে অর্ডার কনফার্ম করবে।
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✔</span>
              <span>১০-৪৮ ঘন্টার মধ্যে আপনার ডেলিভারি বুঝে নিন।</span>
            </li>
          </ul>

          <p className="text-gray-700 text-lg">
            ডাউনলোড করুন আরোগ্য অ্যাপ, আর উপভোগ করুন আকর্ষণীয় মূল্যছাড়।
          </p>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={googlePlayBadgePath}
                alt="Get it on Google Play"
                width={160}
                height={48}
                className="hover:opacity-90 transition-opacity"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={appStoreBadgePath}
                alt="Download on the App Store"
                width={160}
                height={48}
                className="hover:opacity-90 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Right Column: Video */}
        <div className="w-full">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl bg-black">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/uMHeaa-A-DM?si=p2TDG2RhKORtmVmo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToOrderSection;
