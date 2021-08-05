import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Carousel.style.scss";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel = () => {
  return (
    <>
      <Swiper
        navigation={true}
        // breakpoints={{
  
        //   "768": {
        //     "navigation":true
        //   },
          
        // }}
        // pagination={{
        //   type: "progressbar",
        // }}
        className="mySwiper"
        autoplay={{ delay: 2500, disableOnInteraction: false }}

      >
        <SwiperSlide>
          <img
            src="https://www.banimode.com/img/cms/000502/1627102742.jpg"
            alt="pic1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.banimode.com/img/cms/000502/1627110388.jpg"
            alt="pic2 "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.banimode.com/img/cms/000502/1627110460.jpg"
            alt="pic3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.banimode.com/img/cms/000503/1627188349.jpg"
            alt="pic4"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
