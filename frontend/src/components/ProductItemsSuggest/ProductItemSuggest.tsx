import React, { useEffect } from "react";
import { products } from "../../Data/Data";
import { useDispatch ,useSelector} from "react-redux";
import { getWishListThunk } from "../../Store/reducers/wishList.reducer/wishList.reducer";
import Skeleton from '@material-ui/lab/Skeleton';
import { removeProductWish } from '../../Store/reducers/wishList.reducer/wishList.reducer';
import ProductItem from "../ProductItem/ProductItem";
import { RootState } from "../../Store/store";
import { IProduct } from "../../interface";
import { useHistory } from "react-router";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./ProductItemSuggest.style.scss";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import { Row ,Col} from "react-bootstrap";


// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
interface IProductSuggest{
  stateSuggest:IProduct[] | undefined
  setStateSuggest:Function
  pending:boolean
  err:string
}
const ProductItemSuggest:React.FC<IProductSuggest> = ({stateSuggest,setStateSuggest,pending,err}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const {wishList} = useSelector((state:RootState)=>state.reducer.wishList)
  const handleChangeImg = (id: number): void => {
    (stateSuggest)&&   setStateSuggest(
    stateSuggest.map((item: IProduct) =>
        item.id === id ? { ...item, img: item.subImg } : item
      )
    );
  };

  

  const handleChangeLiveImg = (id: number): void => {
    setStateSuggest(products.filter((item)=>item.category === "suggest"));
  };

  const handleWishListAdd = (id:number)=>{
    if(wishList.find((item:IProduct)=>item.id === id) === undefined){
      dispatch(getWishListThunk({id:id}))
      
    }else{
      dispatch(removeProductWish(id))
    }
  
}
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
          "spaceBetween": 30
        },
      }}
      pagination={false}
      className="mySwiper"
    >
      { 
      (pending)?
       <Row>
               <Col lg={6}>
                  <Skeleton variant="text" />
                  <Skeleton variant="circle" width={40} height={40} />
                  <Skeleton variant="rect" width={210} height={118} />
                </Col>
                <Col lg={6}>
                  <Skeleton variant="text" />
                  <Skeleton variant="circle" width={40} height={40} />
                  <Skeleton variant="rect" width={210} height={118} />
                </Col>
                <Col lg={6}>
                  <Skeleton variant="text" />
                  <Skeleton variant="circle" width={40} height={40} />
                  <Skeleton variant="rect" width={210} height={118} />
                </Col>
                <Col lg={6}>
                <Skeleton variant="text" />
                  <Skeleton variant="circle" width={40} height={40} />
                  <Skeleton variant="rect" width={210} height={118} />
                </Col>
       </Row>
      :
      
      
      (stateSuggest)&& stateSuggest.map((item: IProduct, index: number) => (
        <SwiperSlide key={item.id}>
          <ProductItem
            item={item}
            onClick={()=>history.push(`/category/suggest/${item.id}`)}
            handleChangeImg={() => handleChangeImg(item.id)}
            handleChangeLiveImg={() => handleChangeLiveImg(item.id)}
            handleWishListAdd={()=>handleWishListAdd(item.id)}

          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductItemSuggest;


