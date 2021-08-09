
import React, { useEffect } from "react";
import { Container,Row,Col } from 'react-bootstrap'
import { Carousel ,Category,CountDown,ProductItemCarousel,ProductItemSuggest} from '../../components'
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import { RouteComponentProps } from "react-router";
import { FaArrowLeft ,FaPhoneVolume,FaEnvelopeOpenText,FaEnvelope} from "react-icons/fa";
import { products } from "../../Data/Data";
import {IProduct} from '../../interface'
import { useHistory } from "react-router";
import "./HomePage.style.scss";

interface IHomePage extends RouteComponentProps {}
const HomePage:React.FC<IHomePage> = () => {
  const [stateAmazing,setStateAmazing] = React.useState<IProduct[]>() 
  const [stateSuggest,setStateSuggest] = React.useState<IProduct[]>() 
  const history = useHistory()
  useEffect(() => {
    setStateAmazing(products.filter((item)=>item.category === "amazing"))
    setStateSuggest(products.filter((item)=>item.category === "suggest"))

  }, [])

    return (
        <>
          <Carousel />
          <Container className="py-5">
              <Row>
                      <Category                     
                        imgSrc= "https://www.banimode.com/img/cms/000504/1627307986.jpg"
                        alt="ساعت" 
                        href="/category/theWatch"                     
                      />
                     <Category                     
                        imgSrc= "https://www.banimode.com/img/cms/000502/1627103140.jpg"
                        alt="کیف و کفش"  
                        href={"/category/typesBages"}                  
                      />
                  
                  <Category                     
                        imgSrc= "https://www.banimode.com/img/cms/000502/1627103147.jpg"
                        alt="تیشرت"      
                        href={"/category/typesTshirt"}                 
                      />    
                  <Category                     
                        imgSrc= "https://www.banimode.com/img/cms/000504/1627307997.jpg"
                        alt="عطر"  
                        href={"/category/typesPerfume"}                 
                      />
                  <Category                     
                        imgSrc= "https://www.banimode.com/img/cms/000504/1627308010.jpg"
                        alt="بازی وسرگرمی"  
                        href={"/category/typesGame"}                 
                      />
                      
                  <Category                     
                        imgSrc= "https://www.banimode.com/img/cms/000502/1627103215.jpg"
                        alt=" کلرت هدیه"  
                        href="/category/typesCard"                 
                      />

                 
              </Row>

              <section className="section__amazing py-5">
                  <Row className="pt-5 pb-0">
                    
                      <Col lg={6}>
                          <h3 className="section__amazing-title d-flex justify-content-center justify-content-lg-start py-3 py-lg-0" >شگفت انگیزهای روز</h3>
                      </Col>
                      <Col lg={6}>
                          <span className="d-flex justify-content-between align-items-center ">
                           <p className="m-0 section__amazing-timer" >زمان باقی مانده تا ‍ بایان سفارش</p>
                           <CountDown timeCustom={120000} />
                          </span>
                      </Col>
                  </Row>

                  {/* Carousel Product */}
                  <Row className="pt-5 pb-2">
                      <Col>
                         <ProductItemCarousel
                           stateAmazing={stateAmazing}
                           setStateAmazing={setStateAmazing}
                         />
                      </Col>
                  </Row>
                  <div className="section-show-all__amazing d-flex justify-content-center">
                      <button onClick={()=>history.push("/category/suggest")}>مشاهده همه</button>
                  </div>
              </section>
                
              <section className="main__products my-5">
                 <Row>
                    <Col md={6} className="p-0 ps-0  ps-md-2  d-flex pb-3">
                        <CategoryProduct 
                            srcImg="https://www.banimode.com/img/cms/000502/1627103309.jpg" 
                              alt={'انواع بوشاک مردانه'}
                              href={"/category/typesClothingMale"}
                          />
                        </Col>
                        <Col md={6} className="p-0 pe-0  pe-md-2  d-flex  pb-3">
                        <CategoryProduct 
                            srcImg="https://www.banimode.com/img/cms/000502/1627103406.jpg"
                              alt={' ورزشی انواع بوشاک'}
                              href={"/category/typesClothingSports"}
                          />
                        </Col>
                 </Row>
              </section> 


              <section className="section__suggest">
                  {/* Carousel Product */}
                  <Row className="pt-5 pb-2">
       
                      <Col lg={12} className="pb-4">
                          <h3 className="section__amazing-title d-flex justify-content-center justify-content-lg-start py-3 py-lg-0" >  بیشنهادهای امروز</h3>
                      </Col>
                    
                     <Col>
                        <ProductItemSuggest 
                          stateSuggest={stateSuggest}
                          setStateSuggest={setStateSuggest} 
                         />
                     </Col>
                  </Row>
              </section>
       
             <section className="section__category-products py-5">
                     <Row>
                       
                         
                        <Col md={6} className="p-0 ps-0  ps-md-2  d-flex  pb-3">
                        <CategoryProduct 
                            srcImg="https://www.banimode.com/img/cms/000502/1627103382.jpg"
                              alt={' بچگانه  انواع بوشاک'}
                              href={"/category/typesClothingBaby"}
                            
                          />
                        </Col>
                        <Col md={6} className="p-0 pe-0  pe-md-2   d-flex  pb-3">
                        <CategoryProduct 
                            srcImg="https://www.banimode.com/img/cms/000502/1627103292.jpg"
                              alt={'انواع بوشاک'}
                              href={"/category/typesFamale"}
                          />
                        </Col>
                          

                     </Row>
             </section>

             <section className="section__guarantee py-5">
                 <Row>
                 <Col md={3}  className="my-5 my-lg-3">
                      <div className="d-flex servises justify-content-center flex-column align-items-center">
                        <img src="https://www.banimode.com/themes/new/assets/images/icon/delivery.svg" alt="" />
                       
                        <p className="pt-3">ارسال سریع و رایگان</p>
                        <small className="text-center  text-muted">
                        ارسال رایگان برای خریدهای بالای 300 هزار تومان و در زمان انتخابی مشتری به سریعترین شکل ممکن می‌باشد.
                        </small>

                      </div>
                    </Col>
                    <Col md={3} className="my-5 my-lg-3" >
                      <div className="d-flex servises  justify-content-center flex-column align-items-center">
                        <img src="https://www.banimode.com/themes/new/assets/images/icon/originality.svg" alt="" />
                      

                        <p className="pt-3">ضمانت اصالت</p>
                        <small className="text-center text-muted">
                        تمامی کالاها اورجینال و با ضمانت اصل بودن از نمایندگی معتبر تهیه و ارائه می‌شوند.
                        </small>
                      </div>
                    </Col>
                    <Col md={3} className="my-5 my-lg-3" >
                      <div className="d-flex servises justify-content-center flex-column align-items-center">
                        <img src="https://www.banimode.com/themes/new/assets/images/icon/warranty.svg?ver=2" alt="" />
                        <p className="pt-4">ضمانت بازگشت کالا</p>
                        <small className="text-center text-muted">
                        تا 15 روز برای احترام به انتخاب مشتریان کالای خریداری شده برگردانده می‌شود.
                        </small>
                      </div>
                    </Col>
                   
                    <Col md={3}  className="my-5 my-lg-3">
                      <div className="d-flex servises justify-content-center flex-column align-items-center">
                        <img src="https://www.banimode.com/themes/new/assets/images/icon/support.svg" alt="" />
                        <p className="pt-3">خدمات پس از فروش</p>
                        <small className="text-center text-muted">
                        میزبان صدای گرمتان هستیم. هدف تیم پشتیبانی بانی مد تلاش با تمام قوا برای ارائه بهترین خدمات به مشتریان عزیز می باشد.
                        </small>

                        
                      </div>
                    </Col>
                    
                   
                 </Row>
             </section>

             
           <section className="newslleter d-none d-lg-flex my-5 justify-content-center flex-column align-items-center ">
                 <h3 className="mb-3">ثبت نام در خبرنامه </h3>
                 <p className="text-muted">اولین نفری باشید که از جدیدترین محصولات، جشنواره ها و فروش‌های ویژه ما مطلع می شوید</p>
                 <div className="newslleter__register">
                 <form className="d-flex flex-column flex-lg-row" >
                  <input type="text" className="input-register" placeholder="  ادرس ایمیل شما   " />
                  <button className="newslleter__btn d-flex align-items-center me-2">
                    <span>ارسال</span>
                    <FaArrowLeft className="me-4" size={25}/>
                  </button>
                </form>
                 </div>
           </section>


           <div className="footer-mobile d-md-none ">
             <div className="d-flex pt-4 justify-content-center flex-column align-items-center">
                <p >میزبان صدای گرمتان هستیم</p>
                <small>۷ روز هفته - ۲۴  ساعته</small>
             </div>

             <div className="social">
               <div>
                  <FaPhoneVolume className="social-icon mx-2 my-2" size={37}   fill={"#00bf6f"}/>
                  <small>09365679101</small>
               </div>
               <div>
                  <FaEnvelopeOpenText  className="social-icon mx-2 my-2" size={37} fill={"#00bf6f"} />
                  <small>100023</small>
               </div>
               <div>
                  <FaEnvelope  className="social-icon mx-2 my-2" size={37}  fill={"#00bf6f"}/>
                  <small>sajjad.noowdeh91@gmail.com</small>
               </div>
               
             </div>
           </div>
              
          </Container>
        </>
    )
}

export default HomePage
