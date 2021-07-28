
import React, { useEffect } from "react";
import { Container,Row,Col } from 'react-bootstrap'
import { Carousel ,Category,CountDown,ProductItemCarousel,ProductItemSuggest} from '../../components'
import "./HomePage.style.scss";


const HomePage = () => {
  
    return (
        <>
          <Carousel />
          <Container className="py-5">
              <Row>
                  <Col  className="d-flex justify-content-center mb-3 mb-xl-0" xs={6} md={4} xl={2}>
                      <Category                     
                        imgSrc= "https://www.banimode.com/img/cms/000504/1627307986.jpg"
                        alt="ساعت"                      
                      />
                     
                  </Col>
                  <Col className="d-flex justify-content-center mb-3 mb-xl-0" xs={6} md={4} xl={2}>
                     <Category                     
                        imgSrc= "https://www.banimode.com/img/cms/000502/1627103140.jpg"
                        alt="کیف و کفش"                    
                      />
                      
                  </Col>
                  <Col className="d-flex justify-content-center mb-3 mb-xl-0" xs={6} md={4} xl={2}>
                  <Category                     
                        imgSrc= "https://www.banimode.com/img/cms/000502/1627103147.jpg"
                        alt="تیشرت"                   
                      />
                     
                  </Col>
                  <Col className="d-flex justify-content-center mb-3 mb-xl-0" xs={6} md={4} xl={2}>
                  <Category                     
                        imgSrc= "https://www.banimode.com/img/cms/000504/1627307997.jpg"
                        alt="عطر"                   
                      />
                  </Col>

                  <Col className="d-flex justify-content-center mb-3 mb-xl-0" xs={6} md={4} xl={2}>
                  <Category                     
                        imgSrc= "https://www.banimode.com/img/cms/000504/1627308010.jpg"
                        alt="بازی وسرگرمی"                   
                      />
                  </Col>


                  <Col className="d-flex justify-content-center mb-3 mb-xl-0" xs={6} md={4} xl={2}>
                  <Category                     
                        imgSrc= "https://www.banimode.com/img/cms/000504/1627308010.jpg"
                        alt="بازی وسرگرمی"                   
                      />
                  </Col>
               
                 
              </Row>

              <section className="section__amazing py-5">
                  <Row>
                      <Col lg={6}>
                          <h3 className="section__amazing-title d-flex justify-content-center justify-content-lg-start py-3 py-lg-0" >شگفت انگیزهای روز</h3>
                      </Col>
                      <Col lg={6}>
                          <span className="d-flex justify-content-evenly justify-content-lg-between align-items-center ">
                           <p className="m-0 section__amazing-timer" >زمان باقی مانده تا ‍ بایان سفارش</p>
                           <CountDown timeCustom={120000} />
                          </span>
                      </Col>
                  </Row>

                  {/* Carousel Product */}
                  <Row className="pt-5 pb-2">
                      <ProductItemCarousel/>
                  </Row>
                  <div className="section-show-all__amazing d-flex justify-content-center">
                      <button>مشاهده همه</button>
                  </div>
              </section>
                
              <section className="main__products my-5">
                 <Row>
                    <Col md={6} className="pb-2 pb-lg-0 d-flex justify-content-lg-start">
                           <div className="main__products-food__stuffs">
                              <img src="https://www.banimode.com/img/cms/000505/1627385729.jpg" alt="محصولات غذایی" />
                           </div>
                    </Col>

                    <Col md={6}  className="pb-2 pb-lg-0 d-flex justify-content-lg-end">
                    <div className="main__products-game">
                              <img src="https://www.banimode.com/img/cms/000505/1627385720.jpg" alt="محصولات غذایی" />
                           </div>
                    </Col>
                 </Row>
              </section> 


              <section className="section__suggest">
                  {/* Carousel Product */}
                  <Row className="pt-5 pb-2">
       
                      <Col lg={12} className="pb-4">
                          <h3 className="section__amazing-title d-flex justify-content-center justify-content-lg-start py-3 py-lg-0" >  بیشنهادهای امروز</h3>
                      </Col>
                    
                      <ProductItemSuggest />
                  </Row>
              </section>
       
             <section className="section__category-products">
                     <Row>
                        <Col md={6} className="p-0 d-flex justify-content-lg-start pb-3">
                           <div className="section__category-product">
                             <img src="https://www.banimode.com/img/cms/000502/1627103309.jpg" alt="" />
                           </div>
                        </Col>
                        <Col md={6} className="p-0 d-flex justify-content-lg-end pb-3">
                           <div className="section__category-product">
                             <img src="https://www.banimode.com/img/cms/000502/1627103406.jpg" alt="" />
                           </div>
                        </Col>
                        <Col md={6} className="p-0 d-flex justify-content-lg-start mb-3 mb-lg-0">
                           <div className="section__category-product">
                             <img src="https://www.banimode.com/img/cms/000502/1627103382.jpg" alt="" />
                           </div>
                        </Col>
                        <Col md={6} className="p-0 d-flex justify-content-lg-end">
                           <div className="section__category-product">
                             <img src="https://www.banimode.com/img/cms/000502/1627103292.jpg" alt="" />
                           </div>
                        </Col>

                     </Row>
             </section>

             <section className="section__guarantee py-5">
                 <Row>
                 <Col md={3} >
                      <div className="d-flex justify-content-center flex-column align-items-center">
                        <img src="https://www.banimode.com/themes/new/assets/images/icon/delivery.svg" alt="" />
                       
                        <p className="pt-3">ارسال سریع و رایگان</p>
                        <small className="text-center text-muted">
                        ارسال رایگان برای خریدهای بالای 300 هزار تومان و در زمان انتخابی مشتری به سریعترین شکل ممکن می‌باشد.
                        </small>

                      </div>
                    </Col>
                    <Col md={3} >
                      <div className="d-flex justify-content-center flex-column align-items-center">
                        <img src="https://www.banimode.com/themes/new/assets/images/icon/originality.svg" alt="" />
                      

                        <p className="pt-4">ضمانت اصالت</p>
                        <small className="text-center text-muted">
                        تمامی کالاها اورجینال و با ضمانت اصل بودن از نمایندگی معتبر تهیه و ارائه می‌شوند.
                        </small>
                      </div>
                    </Col>
                    <Col md={3} >
                      <div className="d-flex justify-content-center flex-column align-items-center">
                        <img src="https://www.banimode.com/themes/new/assets/images/icon/warranty.svg?ver=2" alt="" />
                        <p className="pt-3">ضمانت بازگشت کالا</p>
                        <small className="text-center text-muted">
                        تا 15 روز برای احترام به انتخاب مشتریان کالای خریداری شده برگردانده می‌شود.
                        </small>
                      </div>
                    </Col>
                   
                    <Col md={3} >
                      <div className="d-flex justify-content-center flex-column align-items-center">
                        <img src="https://www.banimode.com/themes/new/assets/images/icon/support.svg" alt="" />
                        <p className="pt-3">خدمات پس از فروش</p>
                        <small className="text-center text-muted">
                        میزبان صدای گرمتان هستیم. هدف تیم پشتیبانی بانی مد تلاش با تمام قوا برای ارائه بهترین خدمات به مشتریان عزیز می باشد.
                        </small>

                        
                      </div>
                    </Col>
                    
                   
                 </Row>
             </section>

             

              
          </Container>
        </>
    )
}

export default HomePage
