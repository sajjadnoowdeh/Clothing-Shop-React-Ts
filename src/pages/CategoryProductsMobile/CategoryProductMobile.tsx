import React from 'react'
import { BiSearch } from "react-icons/bi";
import { Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import "./CategoryProductsMobile.style.scss"
const CategoryProductMobile = () => {
    console.log("yes")
    return (
        <>
        <Container>
                <FaArrowLeft/>
            <div className="category__mobile">
                <form className="d-flex" >
                    <input type="text" className="input-category__mobile" placeholder="جستجو در میان بیش از ۴۰۰ برند معتبر" />
                    <BiSearch size={30} className="search-icon" />
                </form>
            </div>
            <section>
                <h6 className="my-4">دسته بندی</h6>
                <Row>
                    <Col xs={6} className="my-2">
                        <div className="category__mobile__link">
                            <Link to="/category/newset"><small>جدیدترین ها</small></Link>
                    
                            <img src="https://www.banimode.com/modules/advancetopmenu/img/158790284701-468x261-new-collection.jpg" alt="جدیدترین ها" />
                        </div>
                    </Col>
                    <Col xs={6} className="my-2">
                        <div className="category__mobile__link">
                        <small> زنانه</small>
                            <img src="https://www.banimode.com/modules/advancetopmenu/img/1627128117WOMAN.jpg" alt="زنانه ها" />
                        </div>
                    </Col>
                    <Col xs={6} className="my-2">
                        <div className="category__mobile__link">
                        <small> مردانه</small>
                            <img src="https://www.banimode.com/modules/advancetopmenu/img/1627128142MEN.jpg" alt="مردانه ها" />
                        </div>
                    </Col>
                    <Col xs={6} className="my-2">
                        <div className="category__mobile__link">
                        <small> بچگانه</small>
                            <img src="https://www.banimode.com/modules/advancetopmenu/img/1627128196KIDS.jpg" alt="بچگانه ها" />
                        </div>
                    </Col>
                </Row>
            </section>
           
        </Container>
          
             

          </>
    
    )
}

export default CategoryProductMobile
