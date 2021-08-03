import React from 'react'
import "./ProductSorted.style.scss"
const ProductStored = () => {
    return (
        <div className="sidebar-sorted mb-4 d-flex align-items-center">
        <span className="me-3">مرتب سازی: </span>
        <ul className="d-flex align-items-center justify-content-evenly m-0">
           <li className="active">پیش فرض</li>
           <li >بیشترین تخفیف</li>
           <li>بیشترین قیمت</li>
           <li>کمترین قیمت</li>
        </ul>
      </div>
    )
}

export default ProductStored
