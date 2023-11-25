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
import image5 from "@/public/images/image5.png";
import Image from "next/image";
import SwiperSlides from "@/app/Utilites/SwiperSlides/SwiperSlides";

const Banner = () => {
  let ifExits = true;

  // swiper data
  const sliders = [
    { title: "Hazitage Hoodies ", img: image1, ifExits },
    { title: "Hazitage Trees", img: image2 },
    { title: "Premium Trees", img: image3, ifExits },
    { title: "Premium Zip Hoodies", img: image4, ifExits },
    { title: "Hazitage Woman's Tanks", img: image5 },
  ];

  return (
    <div className="z-0 ">
      {/* swiper */}
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        {sliders.map((item, index) => {
          return (
            <SwiperSlide key={index} data-history="Slide 2">
              <div className="relative z-0">
                <div className="shadow-2xl">
                  <div className="relative">
                    <Image
                      className="w-[100%] h-[80vh]  md:h-full object-cover"
                      src={item.img}
                      alt=""
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
                  </div>
                  {item.ifExits ? (
                    <div className=" text-white absolute z-50 left-5 top-[30%] md:left-20">
                      <p className="w-60 text-3xl md:text-6xl font-bold">
                        {" "}
                        {item.title}
                      </p>
                      <button className="bg-white text-black px-5 py-3 rounded-full font-bold my-4 md:my-10">
                        Shop Now
                      </button>
                    </div>
                  ) : (
                    <div className=" text-white absolute z-50 top-[30%] right-0 md:right-20">
                      <p className="w-60 text-3xl md:text-6xl font-bold">
                        {item.title}
                      </p>
                      <button className="bg-white text-black px-5 py-3 rounded-full font-bold my-4 md:my-10">
                        Shop Now
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;
