import React from 'react'
import { BiShoppingBag,BiSearch } from "react-icons/bi";
import "./SidebarChidren.style.scss"
const SidebarChidren = ({children}:any):JSX.Element => {
    return (
        <>
         <form className="d-none d-lg-flex search-product__sidebar" >
             <input type="text" className="input-sidebar" placeholder="جستجو در محصولات زیر..." />
            <BiSearch fill={"#8c8c8c"} size={30} className="search-icon" />
           </form>
           <div className="d-flex sidebar-section__title align-items-center justify-content-between py-4">
                <small className="m-0">:فیلترهای انجام شده</small>
                <small style={{color:"#f16422"}}>حذف فیلترها</small>
           </div>
           <div className="sidebar__filterd py-4">
              <p >دسته بندی</p>
              <form>
               {children}   
              </form>
           </div>
         </>
    )
}

export default SidebarChidren
