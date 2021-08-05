import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.style.scss"
const Footer = () => {
  return (
    <footer className="footer py-5">
      <Container>
        <div className="d-flex flex-column align-items-center flex-lg-row justify-content-lg-between">
        <div className="section-footer">
            <p>خرید</p>
            <ul className="d-flex flex-column">
             <li> <Link to="/category/maleAll">لباس مردانه</Link></li>
             <li> <Link to="/category/famaleAll"> لباس زنانه</Link></li>
          <li>    <Link to="/category/babyAll"> لباس بچگانه</Link></li>
            </ul>
          </div>
          <div className="section-footer">
            <p>خدمات مشتریان</p>
            <ul>
              <li>
                {" "}
                <li> برسش های متداول</li>
              </li>
              <li>
                {" "}
                <p>درباره ما</p>
              </li>
            </ul>
          </div>

          <div className="section-footer">
            <p>اطلاعات فروشگاه</p>
            <ul>
              <li>
                {" "}
                <li>درباره ما</li>
              </li>
            </ul>
          </div>
          <div className="section-footer">
            <ul>
              <p>میزبان صدای گرمتان هستیم</p>
              <li>7 روز هفته - 24 ساعته</li>
              <li>ایمیل:sajjad.noowdeh91@gmail.com</li>
            </ul>
          </div>


          <div className="brand-footer">
            <img
              src="https://www.banimode.com//themes/new/assets/images/footer/footer-logo.png"
              alt=""
            />
            <div className="brand-footer-social py-4">
              <img
                src="https://www.banimode.com//themes/new/assets/images/footer-twitter.svg"
                alt="twiiter"
              />
              <img
                src="https://www.banimode.com//themes/new/assets/images/footer-aparat.svg"
                alt="aparat"
              />
              <img
                src="https://www.banimode.com//themes/new/assets/images/footer-telegram.svg"
                alt="telegram"
              />
              <img
                src="https://www.banimode.com//themes/new/assets/images/footer-insta.svg"
                alt="insta"
              />
            </div>
          </div>

       
        

         
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
