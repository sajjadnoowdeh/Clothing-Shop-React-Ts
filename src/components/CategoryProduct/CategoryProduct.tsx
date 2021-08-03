import React from 'react'
interface ICategoryProduct{
    srcImg:string
    alt:string
}
const CategoryProduct:React.FC<ICategoryProduct> = ({srcImg="",alt}) => {
    return (
        <div className="section__category-product">
        <img src={srcImg} alt={alt} />
      </div>
    )
}

export default CategoryProduct
