import React from 'react'
import {Container,Navbar,Badge,Nav,NavDropdown,Form,Row,Col,Button} from "react-bootstrap"
import { BiShoppingBag,BiSearch } from "react-icons/bi";
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import { removeProductCard } from '../../Store/reducers/product.reducer/product.reducer';
import { BiHeart} from "react-icons/bi";
import { BsXCircle } from "react-icons/bs";
import {Link} from "react-router-dom";

import "./NavbarDress.style.scss";
export default function NavbarDress() {
  const cart = useSelector((state:RootState)=>state.productsItems.cart); 
  const dispatch = useDispatch();
  const [totalPriceCart,setTotalPriceCart] = React.useState<any>()
  let modalCart = document.querySelector(".cart__modal")
const handleDisplayModalCart =()=>{
           modalCart?.classList.toggle("show")
}
React.useEffect(()=>{
  modalCart?.classList.add("show")
})
const removeItemProduct = (id:number)=>{
  dispatch(removeProductCard(id));
}
React.useEffect(()=>{
  setTotalPriceCart(cart.reduce((prev,current:any)=> prev + current.totalPrice ,0))
},[cart])
    return (
      <Container className="navbar-dress py-4 d-flex align-items-center justify-content-between">
        <div className="order-lg-1 brand " ><Link to="/" className="d-flex justify-content-center justify-content-lg-end"><img className="img-brand" src="https://www.banimode.com//themes/new/assets/images/banilogo.png" alt="" />  </Link></div>
  
         <div className="d-none d-lg-flex  align-items-center">
          
         <div>
            <Button onClick={handleDisplayModalCart} className="basket-btn" style={{backgroundColor:"none"}}>
              <span className="visually-hidden">unread messages</span>
              <Badge className="count-shop">{cart.length}</Badge>
              <BiShoppingBag color="black" size={35}/>
            </Button>


            <div className="cart__modal py-4">
                
                 <Container>
                    <div className="total__cart">
                        <span> مبلغ قابل برداخت:</span>
                            <span>{totalPriceCart} تومان </span>
                        </div>
                    {

                      (cart.length === 0) ?
                       
                      <div style={{margin:"100px 0"}} className="d-flex  flex-column justify-content-center align-items-center">
                      <img src="https://www.banimode.com/themes/new/assets/images/thank-unsucess.svg" alt="" />
                      <p className="my-2">سبد خرید شما خالی است</p>
                         </div>
                        :
                     
                      cart.map((item)=>(
                          <>
                      
                        <div key={item.id} className="cart__item">
                          <Row>
                            <Col sm={4}>
                            <div className="w-100 img__cart my-4" >
                                <img className="w-100" src={item.img} alt="" />
                                <BsXCircle onClick={()=>removeItemProduct(item.id)}/>
                                <div className="bg__img__cart"></div>
                            </div>
                            </Col>
                            <Col sm={8}>
                            <div className="desc__cart h-100 d-flex flex-column justify-content-evenly ">
                                <strong>{item.name}</strong>
                                <small>  {item.type}</small>
                                 <div>
                                 <small style={{borderLeft:'1px solid #6f7377',paddingLeft:"15px"}}>سایز:‌ {item.size}</small>
                                 <small> تعداد :{item.count}</small>
                                 </div>
                                <div className="d-flex justify-content-between">
                                  {
                                    (item.discount) ?
                                    <>
                                    <strong>{(item.discount)&& item.price - (item.price * item.discount) / 100} تومان</strong>
                                    <small className="text-decoration-line-through ms-4" style={{color:"#f37a23"}}>{item.price} تومان</small>
                                    </>
                                    :
                                    <small className=" ms-4" style={{color:"#f37a23"}}>{item.price} تومان</small>

                                  }
                               
                                </div>
                          </div>
                            </Col>
                    </Row>
                   
                  </div>
                          </>
                      ))
                    }

                 


                  <div className="btn__cart">
                    <Link to="/cart">

                       <button>مشاهده سبد خرید</button>
                    </Link>
                  </div>
                 
                 </Container>
            </div>
         </div>
          <BiHeart size={35} className="ms-3"/>
          <div className="login d-flex align-items-center ms-2" >
              <a className="text-decoration-none"  href="#"> ورود</a>
              <span className="px-1">/</span>
              <a  className="text-decoration-none" href="#">ثبت نام</a>
          </div>
         </div>

          <form className="d-none d-lg-flex" >
            <input type="text" className="input-nav" placeholder="جستجو در میان بیش از ۴۰۰ برند معتبر" />
            <BiSearch size={30} className="search-icon" />
          </form>

          
      </Container>
  
    )
}
