"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, HashNavigation } from "swiper/modules";

import image1 from "@/public/images/image1.png";
import image2 from "@/public/images/image2.png";
import image3 from "@/public/images/image3.png";
import image4 from "@/public/images/image4.png";
import Image from "next/image";
import SwiperSlides from "@/app/Utilites/SwiperSlides/SwiperSlides";

const Banner = () => {
  // swiper data
  const sliders = [
    { title: "premimu trees", img: image1 },
    { title: "premimu trees", img: image2 },
    { title: "premimu trees", img: image3 },
    { title: "premimu trees", img: image4 },
  ];

  return (
    <div>
      {/* swiper */}
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        {sliders.map((item, index) => {
          return (
            <SwiperSlide key={index} data-history="Slide 2">
              <Image className="w-full" src={item.img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;
