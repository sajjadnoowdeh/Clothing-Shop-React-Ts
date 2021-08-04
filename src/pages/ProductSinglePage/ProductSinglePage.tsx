import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import { BiShoppingBag,BiSearch } from "react-icons/bi";
import { useParams } from 'react-router';
import {FaRuler } from "react-icons/fa";
import "./ProductSinglePage.style.scss"
 const ProductSinglePage = () => {
     let {id} = useParams<{id:string}>();
     console.log(id)
    return (
        <Container>
           <Row>
           <Col lg={6}>
               <img loading="lazy" src="https://www.banimode.com/541214-thickbox_default/47145.jpg" alt="" />
           </Col>
           <Col lg={6} className="pt-4">
               <div>
                   <h4>JootiJeans</h4>
                   <p className="my-3">شلوار جین مردانه جوتی جینز Joot</p>
                   <span className="d-flex align-items-center my-4">
                       <small className="text-decoration-line-through ms-4 discount">1999 تومان</small>
                       <p className="discount-value d-flex align-items-center m-0">تخفیف  شما: <p className="discount-price m-0">23000 تومان</p></p>
                   </span>
                   <h4 className="price mb-5">650000تومان</h4>
               </div>

               <div className="d-flex">
               <select name="selectSize" className="single-select" placeholder="انتخاب سایز">
                   <option value="30">30</option>
                   <option value="31">31</option>
                   <option value="32">32</option>
                   <option value="33">33</option>
                   <option value="34">34</option>
                   <option value="35">35</option>
                   <option value="36">36</option>
                   <option value="37">37</option>
               </select>

               <button className="btn-size me-2 ">
                   <FaRuler size={20} />
                   <span className="me-2">سایز من چنده؟</span>
               </button>
               </div>
               <button className="basket my-4">
                     <BiShoppingBag size={25}  />
                     <span className="me-2">          افزودن به سبد خرید</span>
         
               </button>
           </Col>
           </Row>
        </Container>
    )
}


export default ProductSinglePage;