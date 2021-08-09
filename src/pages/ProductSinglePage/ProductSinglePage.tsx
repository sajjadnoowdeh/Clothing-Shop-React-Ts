import React from "react";
import { Container, Col, Row,Button,Table } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { useParams } from "react-router";
import { products } from "../../Data/Data";
import { IProduct } from "../../interface";
import { FaRuler } from "react-icons/fa";
import { BiHeart} from "react-icons/bi";
import {ProductSingleTabs} from "../../components";
import ProductModalSizes from "./ProductModalSizes";

import "./ProductSinglePage.style.scss";
const ProductSinglePage = () => {
  let { id } = useParams<{ id: string }>();
  const [modalShow, setModalShow] = React.useState(false);
  const [product, setProduct] = React.useState<IProduct>();
  const [productImg, setProductImg] = React.useState<IProduct>();
  React.useEffect(() => {
    setProduct(products.find((item) => item.id === +id));
    setProductImg(products.find((item) => item.id === +id));
  }, [id]);

  React.useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  React.useEffect(() => {
    console.log(product);
  }, [product]);

  const handleChangeImg = (src:string)=>{
      if(src === "img") {
          (productImg) &&  setProduct({...productImg,img:productImg?.img})
      }else{

          (productImg) &&  setProduct({...productImg,img:productImg?.subImg})
      }
  }

  return (

    <>
   
      <Container>
      <Row className="py-4">
        <Col lg={6} className={"product"}>
          <div className="d-flex justify-content-center align-items-center">
            <img loading="lazy" src={product?.img} alt={product?.name} />
          </div>
          <div className={"discount-product"}>{product?.discount}%</div>
          <div className="product-bg"></div>
        </Col>
        <Col lg={6} className="pt-4 px-3">
          <div>
            <div className="d-flex justify-content-between">
            <h4>{product?.name}</h4>
            <BiHeart color="black" size={40}/>
            </div>
            <p className="my-3">{product?.type}</p>
            <span className="d-flex align-items-center my-4">
              <small
                className={
                  product?.discount
                    ? "text-decoration-line-through ms-4 discount "
                    : ` ms-4 discount`
                }
              >
                {product?.price} تومان
              </small>
              <p className="discount-value d-flex align-items-center m-0">
                تخفیف شما:{" "}
                <p className="discount-price m-0 me-3 ">
                  {product?.discount
                    ? (product?.price * product?.discount) / 100
                    : 0}{" "}
                  تومان
                </p>
              </p>
            </span>
            {product?.discount ? (
              <h4 className="price mb-5">
                {product.price - (product?.price * product?.discount) / 100}{" "}
                تومان
              </h4>
            ) : null}
          </div>

          <p>جهت</p>
          <div className="d-flex mb-3">
            <div className="product-arrowImg ms-3" onClick={()=>handleChangeImg("img")}>
              <img src={productImg?.img} alt={productImg?.type} />
            </div>
            <div className="product-arrowImg" onClick={()=>handleChangeImg("subImg")}>
              <img src={productImg?.subImg} alt={productImg?.type} />
            </div>
          </div>

          <div className="d-flex">
            <select
              name="selectSize"
              className="single-select"
            >
               <option defaultValue="" selected disabled hidden>انتخاب سایز </option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
            </select>

            <button className="btn-size me-2 "  onClick={() => setModalShow(true)}>
              <FaRuler size={20} />
              <span className="me-2">سایز من چنده؟</span>
            </button>
          </div>
          <button className="basket my-4">
            <BiShoppingBag size={25} />
            <span className="me-2"> افزودن به سبد خرید</span>
          </button>
          <div className="d-flex">
              <div className="d-flex align-items-center">
                  <img src="https://www.banimode.com//themes/new/assets/images/icon/15days.svg" alt="ضمانت بازگشت کالا" />
                  <small>ضمانت بازگشت کالا</small>
              </div>
              <div className="d-flex align-items-center">
                  <img src="https://www.banimode.com//themes/new/assets/images/icon/originality-light.svg" alt="ضمانت اصالت کالا" />
                  <small>ضمانت اصالت کالا</small>
              </div>
              <div className="d-flex align-items-center">
                  <img src="https://www.banimode.com//themes/new/assets/images/icon/support-light.svg" alt="ضمانت اصالت کالا" />
                  <small>   خدمات پس از فروش</small>
              </div>
              <div className="d-flex align-items-center my-5">
                  <img src="https://www.banimode.com//themes/new/assets/images/icon/delivery-light.svg" alt="  تحویل سریع و آسان" />
                  <small>     تحویل سریع و آسان </small>
              </div>
          </div>
        </Col>
        <Col>
          <ProductSingleTabs />
        </Col>
      </Row>

      <ProductModalSizes
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
      />



    </Container>
      
    
    </>
  );
};


export default ProductSinglePage;
