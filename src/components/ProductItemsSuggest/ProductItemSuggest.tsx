import React, { useEffect } from "react";
import { suggests } from "../../Data/Data";
import ProductItem from "../ProductItem/ProductItem";
import { IProduct } from "../../interface";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./ProductItemSuggest.style.scss";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const ProductItemSuggest = () => {
  const [productItems, setProductItems] = React.useState<IProduct[]>(suggests);

  const handleChangeImg = (id: number): void => {
    setProductItems(
      productItems.map((item: IProduct) =>
        item.id === id ? { ...item, img: item.subImg } : item
      )
    );
  };

  const handleChangeLiveImg = (id: number): void => {
    setProductItems(suggests);
  };
  return (
    <Swiper
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      spaceBetween={15}
      slidesPerGroup={1}
      navigation={true}
      loop={true}
      loopFillGroupWithBlank={true}
      breakpoints={{
        "340": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        "640": {
          slidesPerView: 2,
        },
        "768": {
          slidesPerView: 4,
        },
        "1024": {
          slidesPerView: 4,
        },
      }}
      pagination={false}
      className="mySwiper"
    >
      {productItems.map((item: IProduct, index: number) => (
        <SwiperSlide key={item.id}>
          <ProductItem
            item={item}
            handleChangeImg={() => handleChangeImg(item.id)}
            handleChangeLiveImg={() => handleChangeLiveImg(item.id)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductItemSuggest;
