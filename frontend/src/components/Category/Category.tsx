import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Category.style.scss"
interface ICategory{
    imgSrc:string
    alt:string
    href?:string 
}
const Category:React.FC<ICategory> = ({imgSrc="",alt="",href=""}):JSX.Element => {
    return (
        <Col className="d-flex justify-content-center mb-3 mb-xl-0" xs={6} md={4} xl={2} >
            <div className=" category">
             <Link to={href}> <img src={imgSrc} alt={alt}/></Link>  
            </div>
         </Col>
    )

}

export default Category
