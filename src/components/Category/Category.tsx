import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "./Category.style.scss"
interface ICategory{
    imgSrc:string
    alt:string
}
const Category:React.FC<ICategory> = ({imgSrc="",alt=""}):JSX.Element => {
    return (
        <Col className="d-flex justify-content-center mb-3 mb-xl-0" xs={6} md={4} xl={2}>
            <div className=" category">
                <img src={imgSrc} alt={alt}/>
            </div>
         </Col>
    )

}

export default Category
