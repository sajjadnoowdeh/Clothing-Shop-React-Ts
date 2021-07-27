import React from "react";
import { Container } from "react-bootstrap";
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
        <small>خانه</small>
      </div>
      <div className="d-flex flex-column align-items-center">
        <BiSearchAlt  size={28}/>
        <small>جستجو و دسته بندی</small>
      </div>

      <div className="d-flex flex-column align-items-center">
        <BiShoppingBag  size={28}/>
        <small>سبد خرید</small>
      </div>
      <div className="d-flex flex-column align-items-center">
        <BiHeart  size={28}/>
        <small>علاقه مندی ها</small>
      </div>
      <div className="d-flex flex-column align-items-center">
        <BiUser  size={28}/>
        <small>بروفایل</small>
      </div>
    </div>

  );
};

export default NavbarBottom;
