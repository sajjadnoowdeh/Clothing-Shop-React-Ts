import React from "react";
import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="d-flex ">
        <div>
            <strong>خرید</strong>
            <ul>
              <li>لباس مردانه</li>
              <li> لباس زنانه</li>
              <li> لباس بچگانه</li>
            </ul>
          </div>
          <div>
            <strong>خدمات مشتریان</strong>
            <ul>
              <li>
                {" "}
                <p> برسش های متداول</p>
              </li>
              <li>
                {" "}
                <p>درباره ما</p>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>میزبان صدای گرمتان هستیم</li>
              <li>7 روز هفته - 24 ساعته</li>
              <li>ایمیل:sajjad.noowdeh91@gmail.com</li>
            </ul>
          </div>

          <div>
            <strong>اطلاعات فروشگاه</strong>
            <ul>
              <li>
                {" "}
                <p>درباره ما</p>
              </li>
            </ul>
          </div>

          <div className="brand-footer">
            <img
              src="https://www.banimode.com//themes/new/assets/images/footer/footer-logo.png"
              alt=""
            />
            <div className="brand-footer-social">
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
