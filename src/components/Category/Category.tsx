import React from 'react'
import "./Category.style.scss"
interface ICategory{
    imgSrc:string
    alt:string
}
const Category:React.FC<ICategory> = ({imgSrc="",alt=""}):JSX.Element => {
    return (
        <div className=" category">
              <img src={imgSrc} alt={alt}/>
         </div>
    )
}

export default Category
