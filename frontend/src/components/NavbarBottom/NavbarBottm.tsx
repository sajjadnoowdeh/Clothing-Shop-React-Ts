import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  BiSearchAlt,
  BiHomeAlt,
  BiShoppingBag,
  BiHeart,
  BiUser,
} from "react-icons/bi";
import "./NavbarBottm.style.css";
const NavbarBottom = () => {
  return (

      <div className="desc-nav-bottom  d-flex d-lg-none px-4">
      <div className="d-flex flex-column align-items-center">
        <BiHomeAlt  size={28}/>
        <NavLink exact activeClassName="selected" to="/" >
       <small>خانه</small>
  </NavLink>
     
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <BiSearchAlt  size={28}/>
        <NavLink activeClassName="selected" to="/categoryMobile" > <small>جستجو و دسته بندی</small></NavLink>
       
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center">
        <BiShoppingBag size={28}/>
        <NavLink activeClassName="selected" to="/category/typesBages" >
          <small>سبد خرید</small>
        </NavLink>
        
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <BiHeart  size={28}/>
        <NavLink activeClassName="selected" to="/newset" >      <small>علاقه مندی ها</small></NavLink>
   
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <BiUser  size={28}/>
        <NavLink activeClassName="selected" to="/newset" >   <small>بروفایل</small></NavLink>

      
      </div>
    </div>

  );
};

export default NavbarBottom;
