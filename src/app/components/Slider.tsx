"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SliderLink from "./ui/SliderLink";
import SliderButton from "./ui/SliderButton";

export default function Slider({ products }: { products: ShopifyProduct[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <div className="relative flex items-center p-4 pt-4 sm:p-6 mb-6 h-fit">
      <Image
        src={"/bg-slider.png"}
        fill
        alt="Slider Background"
        className="absolute top-0 object-cover"
      />
      <Swiper
        modules={[Navigation /* , Autoplay */]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: ".arrow-left",
          nextEl: ".arrow-right",
        }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full"
        onSlideChange={handleSlideChange}
      >
        {products.slice(0, 3).map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex flex-col items-center gap-8 sm:flex-row-reverse md:w-fit mx-auto">
              <div className="w-full flex justify-center">
                <Image
                  src={
                    product.images.edges?.[0]?.node?.originalSrc ||
                    "/not-image.webp"
                  }
                  alt={product.title}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center justify-center md:items-start w-full">
                <h1 className="text-4xl text-green-700 mb-4 font-nromal">
                  {product.title}
                </h1>
                <p className="hidden md:block text-base font-light text-green-700 md:mb-4">
                  {product.description.split(".")[0]}.
                </p>
                <div className="flex flex-col lg:flex-row gap-3 py-2">
                  <SliderLink title="SHOP NOW" variant="fill" />
                  <SliderLink title="TAKE THE QUIZ" />
                </div>
                <div className="relative flex gap-2 mt-4 md:mt-10">
                  <SliderButton variant="left" currentSlide={currentSlide} />
                  <SliderButton variant="right" currentSlide={currentSlide} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
