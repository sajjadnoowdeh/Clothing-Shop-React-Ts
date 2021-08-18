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
import { getWishListThunk } from "../../Store/reducers/wishList.reducer/wishList.reducer";
import { getCategoryProductThunk } from "../../Store/reducers/product.reducer/product.reducer";
import {
  productChangeImg,
  productChangeSubImg,
} from "../../Store/reducers/product.reducer/product.reducer";
import "./CategoryProducts.style.scss";
function CategoryProducts() {
  let { category_name } = useParams<{ category_name: string }>();
  const { productsCategory, loading, error } = useSelector(
    (state: RootState) => state.reducer.productsItems
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();
  const {wishList} = useSelector((state:RootState)=>state.reducer.wishList)

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
  return (
    <>
      <Container>
        {/* <p className="py-2 title-category" style={{color:"#f16422",fontWeight:600}}>{" بچگانه>>   کاپشن"}</p> */}

        <Row className="d-flex justify-content-between py-4">
          <Col lg={3}>
            <SidebarChidren>
              <SidebarFilterProduct lable={"LC"} name={"LC"} />
              <SidebarFilterProduct lable={"Fiorlla"} name={"Fiorlla"} />
              <SidebarFilterProduct lable={"Baleno"} name={"Baleno"} />
            </SidebarChidren>

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
            <ProductStored />

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
