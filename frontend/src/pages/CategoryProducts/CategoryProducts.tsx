import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Skeleton from "@material-ui/lab/Skeleton";
import {
  ProductItem,
  SidebarFilterProduct,
  SidebarFilterSize,
  ProductStored,
  SidebarChidren,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, useRouteMatch } from "react-router";
import { removeProductWish } from "../../Store/reducers/wishList.reducer/wishList.reducer";
import { IProduct } from "./../../interface";
import { RootState } from "../../Store/store";
import { BiShoppingBag,BiSearch } from "react-icons/bi";
import { handleDataLowestThunk,handleDataHighestThunk,handleDataHighestDiscountThunk ,handleDefaultSortThunk,handleSearchThunk} from "../../Store/reducers/product.reducer/product.reducer";
import { getWishListThunk } from "../../Store/reducers/wishList.reducer/wishList.reducer";
import { getCategoryProductThunk } from "../../Store/reducers/product.reducer/product.reducer";
import {
  productChangeImg,
  productChangeSubImg,
} from "../../Store/reducers/product.reducer/product.reducer";
import "./CategoryProducts.style.scss";
import axios from "axios";
function CategoryProducts() {
  let { category_name } = useParams<{ category_name: string }>();
  const { productsCategory, loading, error } = useSelector(
    (state: RootState) => state.reducer.productsItems
  );
  const stateCategory= useSelector(
    (state: RootState) => state.reducer.productsItems
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();
  const [direction,setDirection]= React.useState<string>("")
  const {wishList} = useSelector((state:RootState)=>state.reducer.wishList)
  const [valueSearch,setValueSearch] = React.useState<string>("")
  useEffect(() => {
    dispatch(getCategoryProductThunk(category_name));
  }, [category_name]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChangeImg = (id: number): void => {
    dispatch(productChangeImg(id));
  };

  const handleChangeLiveImg = (): void => {
    dispatch(productChangeSubImg(category_name));
  };

    const handleWishListAdd = (id:number)=>{
      if(wishList.find((item:IProduct)=>item.id === id) === undefined){
        dispatch(getWishListThunk({id:id}))
        
      }else{
        dispatch(removeProductWish(id))
      }   
}

   const handleLowestPrice =()=>{
     setDirection("lowest");
   }
   const handleHighestPrice =()=>{
    setDirection("highest");
  }
   const handleHighestDiscountPrice =()=>{
    setDirection("highestDiscount");
  }
  const handleDefaultSort =()=>{
    setDirection("default");
  }

   React.useEffect(()=>{
        if(direction === "lowest"){
           dispatch(handleDataLowestThunk(category_name)) 
        }
        if(direction === "highest"){
          dispatch( handleDataHighestThunk(category_name))
        }
        if(direction === "highestDiscount"){
          dispatch( handleDataHighestDiscountThunk(category_name))
        }
        if(direction === "default"){
          dispatch( handleDefaultSortThunk(category_name))
        }
        
   },[direction])

   const getValueSearch =(e:any)=>{
     setValueSearch(e.target.value)
     if(e.target.value === ""){
       dispatch(getCategoryProductThunk(category_name))
     }
   }
   const handleSubmitSearchCategory =(e:any)=>{
      e.preventDefault()
     dispatch(handleSearchThunk({value:valueSearch,category:category_name}))
      
   }

  return (
    <>
      <Container>
        {/* <p className="py-2 title-category" style={{color:"#f16422",fontWeight:600}}>{" بچگانه>>   کاپشن"}</p> */}

        <Row className="d-flex justify-content-between py-4">
          <Col lg={3}>
          <form onSubmit={(e)=>handleSubmitSearchCategory(e)} className="d-none d-lg-flex search-product__sidebar" >
             <input  onChange={(e)=>getValueSearch(e)} type="text" className="input-sidebar" placeholder="جستجو در محصولات زیر..." />
             <button type="submit" className="btn-search">
                <BiSearch fill={"#8c8c8c"} size={30} className="search-icon" />
             </button>
           </form>
           <div className="d-flex sidebar-section__title align-items-center justify-content-between py-4">
                <small className="m-0">:فیلترهای انجام شده</small>
                <small style={{color:"#f16422"}}>حذف فیلترها</small>
           </div>
           <div className="sidebar__filterd py-4">
              <p >دسته بندی</p>
              <form>
              <SidebarFilterProduct lable={"LC"} name={"LC"} />
              <SidebarFilterProduct lable={"Fiorlla"} name={"Fiorlla"} />
              <SidebarFilterProduct lable={"Baleno"} name={"Baleno"} />
              </form>
           </div>
           
            {category_name !== "theWatch" && (
              // <SidebarFilterSize />

              <select name="filter-size" className="select-filter my-2 my-lg-0">
                <option value="">همه</option>
                {productsCategory.map((item: IProduct, index: number) => (
                  <option key={item.id} value={item.size}>
                    {item.size}
                  </option>
                ))}
              </select>
            )}
          </Col>
          <Col lg={8}>
            <ProductStored
              handleSortLowest={()=>handleLowestPrice()}
              handleHighestPrice={()=>handleHighestPrice()}
              handleHighestDiscountPrice={()=>handleHighestDiscountPrice()}
              handleDefaultSort={()=>handleDefaultSort()}
            />

            {loading ? (
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
            ) : (
              <Row>
                {productsCategory.map((item: IProduct, index: number) => (
                  <Col lg={6} key={item.id}>
                    <ProductItem
                      item={item}
                      onClickHistory={() =>
                        history.push(`${match.url}/${item.id}`)
                      }
                      handleChangeImg={() => handleChangeImg(item.id)}
                      handleChangeLiveImg={() => handleChangeLiveImg()}
                      handleWishListAdd={()=>handleWishListAdd(item.id)}
                    />
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CategoryProducts;
