import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface BannerImage {
  src: string;
  alt: string;
  href?: string;
}

interface ImageBannerProps {
  images: BannerImage[];
}

export const Banner: React.FC<ImageBannerProps> = ({ images }) => {
  return (
    <div className="max-w-7xl mx-auto my-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="rounded-2xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            {image.href ? (
              <a href={image.href} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-0 aspect-video md:aspect-[21/9]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="100vw"
                  />
                </div>
              </a>
            ) : (
              <div className="relative w-full h-0 aspect-video md:aspect-[21/9]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="100vw"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
