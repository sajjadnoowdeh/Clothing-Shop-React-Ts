import React ,{useEffect}from 'react'
import { BiHeart} from "react-icons/bi";
import { amazing,IAmaZing } from '../../Data/Data';


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
    const [productItems,setProductItems] = React.useState<IAmaZing[]>(amazing)
   
    useEffect(()=>{
        setProductItems(productItems.filter((item:IAmaZing)=>item.discount > 40))
    },[])
 
    const handleChangeImg =(id:number):void=>{
        setProductItems(productItems.map((item:IAmaZing)=>item.id === id ?{...item,img:item.subImg} :item))
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
            productItems.map((item:IAmaZing,index:number)=>(
              <SwiperSlide key={item.id}>
                 <div className="d-flex flex-column" onMouseLeave={()=>handleChangeLiveImg(item.id)} onMouseEnter={()=> handleChangeImg(item.id)}>
                      <div className="product___card">
                      <img src={item.img} alt={item.name} className={item.name} />
                      <small className="descount">%{item.discount}</small>
                      <div className="product___heart">
                         <BiHeart  size={28} className="d-lg-none"/>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between py-3">
                      <strong>{item.name}</strong>
                      <small className="text-decoration-line-through text-muted"> {item.price}{" "}تومان</small>
                    </div>

                    <div className="d-flex justify-content-between pt-3 pb-1">
                      <p className="m-0">{item.type}</p>
                      <small className="product___card-price"> { item.price - (item.price * item.discount) / 100}{" "}تومان</small>
                    </div>
                    <div className="py-3 d-flex justify-content-start">
                       <small className="product__card-size mb-2">{item.size}</small>
                    </div>
                 </div>
              </SwiperSlide>
            ))
          }

        
      </Swiper>
    )
}

export default ProductItemCarousel
