import React from 'react'
import "./ProductSorted.style.scss"
interface IProductSorted{
  handleSortLowest:Function
  handleHighestPrice:Function
  handleHighestDiscountPrice:Function
  handleDefaultSort:Function
}
const ProductStored:React.FC<IProductSorted> = ({handleSortLowest,handleHighestPrice,handleHighestDiscountPrice,handleDefaultSort}) => {
    return (
        <div className="sidebar-sorted mb-4 d-flex align-items-center">
        <span className="me-3">مرتب سازی: </span>
        <ul className="d-flex align-items-center justify-content-evenly m-0">
           <li onClick={()=>handleDefaultSort()} className="active-sorted">پیش فرض</li>
           <li onClick={()=>handleHighestDiscountPrice()} className="active-sorted">بیشترین تخفیف</li>
           <li onClick={()=>handleHighestPrice()} className="active-sorted">بیشترین قیمت</li>
           <li onClick={()=>handleSortLowest()} className="active-sorted">کمترین قیمت</li>
        </ul>
      </div>
    )
}

export default ProductStored
