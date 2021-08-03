import React ,{useEffect}from 'react'
import ProductItem from '../ProductItem/ProductItem';
import { amazing } from '../../Data/Data';
import { IProduct } from '../../interface';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./ProductItemCarousel.style.scss"


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation,Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

const ProductItemCarousel = ({}) => {
    const [productItems,setProductItems] = React.useState<IProduct[]>(amazing)
 
    const handleChangeImg =(id:number):void=>{
        setProductItems(productItems.map((item:IProduct)=>item.id === id ?{...item,img:item.subImg} :item))
    }
      
     const handleChangeLiveImg =(id:number):void=>{
     setProductItems(amazing)
 }
    return (
        <Swiper 
        autoplay={{"delay": 3000, "disableOnInteraction": false}}
        //  slidesPerView={5} 
          spaceBetween={15} 
          slidesPerGroup={1} 
          navigation={true}
          loop={true}
           loopFillGroupWithBlank={true}
           breakpoints={{
            "340": {
              "slidesPerView": 1,
              "spaceBetween": 20,

            },
            "640": {
              "slidesPerView": 2,
              // "spaceBetween": 20
            },
            "768": {
              "slidesPerView": 4,
            
              // "spaceBetween": 40
            },
            "1024": {
              "slidesPerView": 4,
              // "spaceBetween": 50
            }
          }}
     
            pagination={false}  className="mySwiper">
          {
            productItems.map((item:IProduct,index:number)=>(
              <SwiperSlide key={item.id}>
                  <ProductItem 
                    item={item}
                    handleChangeImg={()=>handleChangeImg(item.id)}
                    handleChangeLiveImg={()=>handleChangeLiveImg(item.id)}
                   />
              </SwiperSlide>
            ))
          }

        
      </Swiper>
    )
}

export default ProductItemCarousel
