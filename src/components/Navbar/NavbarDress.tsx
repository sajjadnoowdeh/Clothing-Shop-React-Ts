import React from 'react'
import {Container,Navbar,Badge,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap"
import { BiShoppingBag,BiSearch } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/reducers/store';
import { BiHeart} from "react-icons/bi";
import { Link } from 'react-router-dom';
import "./NavbarDress.style.scss";
export default function NavbarDress() {
  const cart = useSelector((state:RootState)=>state.productsItems.cart)
    return (
      <Container className="navbar-dress py-4 d-flex align-items-center justify-content-between">
        <div className="order-lg-1 brand " ><Link to="/" className="d-flex justify-content-center justify-content-lg-end"><img className="img-brand" src="https://www.banimode.com//themes/new/assets/images/banilogo.png" alt="" />  </Link></div>
  
         <div className="d-none d-lg-flex  align-items-center">
          
         <Button className="basket-btn" style={{backgroundColor:"none"}}>
            <span className="visually-hidden">unread messages</span>
             <Badge className="count-shop">{cart.length}</Badge>
            <BiShoppingBag color="black" size={35}/>
          </Button>
          <BiHeart size={35} className="ms-3"/>
          <div className="login d-flex align-items-center ms-2">
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
