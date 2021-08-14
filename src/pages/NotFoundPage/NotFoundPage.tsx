import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFoundPage.style.scss";
const NotFoundPage = () => {
  return (
    <section className="not-found py-5">
      <Container>
        <div className="notFound__page d-flex flex-column justify-content-center align-items-center">
          <img
            src="https://www.banimode.com//themes/new//assets/images/404.svg"
            alt="صفحه مورد نظر پیدا نشد"
          />
          <p className="notFound__text my-4">صفحه مورد نظر پیدا نشد</p>
          <Link to="/">
            {" "}
            <button className="notFound__homeLink my-4">
              بازگشت به صفحه اصلی
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default NotFoundPage;
