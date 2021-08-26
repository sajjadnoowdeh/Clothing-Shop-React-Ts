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
        <NavLink className="d-flex flex-column align-items-center" exact activeClassName="selected" to="/" >
        <BiHomeAlt  className="mb-1" size={28}/>
       <small>خانه</small>
     </NavLink>
     
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
      <NavLink className="d-flex flex-column align-items-center justify-content-center"  activeClassName="selected" to="/categoryMobile" >
        <BiSearchAlt  className="mb-1" size={28}/>
       <small>جستجو و دسته بندی</small></NavLink>
       
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center">
        <NavLink className="d-flex flex-column align-items-center justify-content-center"  activeClassName="selected" to="/cart" >
        <BiShoppingBag  className="mb-1"size={28}/>
          <small>سبد خرید</small>
        </NavLink>
        
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
         <NavLink className="d-flex flex-column align-items-center" activeClassName="selected" to="/wishList" >    
        <BiHeart  className="mb-1"  size={28}/>
          <small>علاقه مندی ها</small>
          </NavLink>
   
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <NavLink className="d-flex flex-column align-items-center" activeClassName="selected" to="/newset" > 
        <BiUser className="mb-1"  size={28}/>
          <small>بروفایل</small>
          </NavLink>

      
      </div>
    </div>

  );
};

export default NavbarBottom;

