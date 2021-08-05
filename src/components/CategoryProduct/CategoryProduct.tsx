import React from 'react'
import {Link} from "react-router-dom"
interface ICategoryProduct{
    srcImg:string
    alt:string
    href?:string
}
const CategoryProduct:React.FC<ICategoryProduct> = ({srcImg="",alt,href=""}) => {
    return (
        <div className="section__category-product">
            <Link to={href}> <img src={srcImg} alt={alt} /></Link>
       
      </div>
    )
}

export default CategoryProduct
