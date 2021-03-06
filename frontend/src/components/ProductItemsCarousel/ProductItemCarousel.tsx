import React ,{useEffect}from 'react'
import ProductItem from '../ProductItem/ProductItem';
import { getWishListThunk } from '../../Store/reducers/wishList.reducer/wishList.reducer';
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import { removeProductWish } from '../../Store/reducers/wishList.reducer/wishList.reducer';
import { products } from '../../Data/Data';
import { IProduct } from '../../interface';
import { History } from 'swiper/core';

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
import { useHistory } from 'react-router';
import axios from 'axios';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);
interface IProductCarousel{
  stateAmazing:IProduct[] | undefined
  setStateAmazing:Function
  loading:boolean
  error:string
 }
  const ProductItemCarousel:React.FC<IProductCarousel> = ({stateAmazing,setStateAmazing,loading,error}) => {
      const history = useHistory()
      const dispatch = useDispatch()
      const {wishList} = useSelector((state:RootState)=>state.reducer.wishList)
      const handleChangeImg =(id:number):void=>{
         (stateAmazing)&& setStateAmazing(stateAmazing.map((item:IProduct)=>item.id === id ?{...item,img:item.subImg} :item))
      }
      
       const handleChangeLiveImg =(id:number):void=>{
        setStateAmazing(products.filter((item)=>item.category === "amazing"))
   }

      const handleWishListAdd = (id:number)=>{
            if(wishList.find((item:IProduct)=>item.id === id) === undefined){
              dispatch(getWishListThunk({id:id}))
              
            }else{
              dispatch(removeProductWish(id))
            }
          
           
      }


      // React.useEffect(()=>{
      //   console.log({wishState});
        
      //   console.log(wishList.find((item:IProduct)=>item.id === wishID));

      // },[])
  
  
      return (
          <Swiper 
          autoplay={{"delay": 3000, "disableOnInteraction": false}}
            slidesPerView={5} 
            spaceBetween={15} 
            slidesPerGroup={1} 
            navigation={true}
            loop={true}
             loopFillGroupWithBlank={true}
             breakpoints={{
              "340": {
                "slidesPerView": 1,
                "spaceBetween": 10,

              },
              "640": {
                "slidesPerView": 2,
                 "spaceBetween": 20
              },
              "768": {
                "slidesPerView": 4,
            
                 "spaceBetween": 40
              },
              "1024": {
                "slidesPerView": 4,
                 "spaceBetween": 30
              }
            }}
     
              pagination={false}  className="mySwiper swiper-amazing">
            {
           (stateAmazing)&&   stateAmazing.map((item:IProduct,index:number)=>(
                <SwiperSlide key={item.id}>
                    <ProductItem 
                     onClick={()=>history.push(`/category/amazing/${item.id}`)}
                      item={item}
                      handleChangeImg={()=>handleChangeImg(item.id)}
                      handleChangeLiveImg={()=>handleChangeLiveImg(item.id)}
                      handleWishListAdd={()=>handleWishListAdd(item.id)}
                    
                     />
                </SwiperSlide>
              ))
            }

        
        </Swiper>
      )
  }

  export default ProductItemCarousel


