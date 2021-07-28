import React from "react";
import { Container } from "react-bootstrap";
import "./Menu.style.scss"
const Menu = () => {
  return (
    <Container fluid className="d-none d-lg-flex">
      <ul className="d-flex menu justify-content-around mt-3 pb-2">
        <li className="list-unstyled newDress__link ">
          <a href="#"> جدیدترین ها</a>
          <div className="category__subnew">
            <ul>
              <strong>
                <a href="#">جدبدترین ها</a>
              </strong>
              <li className="list-unstyled">
                <a href="#">زنانه</a>{" "}
              </li>
              <li className="list-unstyled">
                <a href="#">مردانه</a>{" "}
              </li>
              <li className="list-unstyled">
                <a href="#">بچگانه</a>{" "}
              </li>
            </ul>
          </div>
        </li>
        <li className="list-unstyled male__link ">
          <a href="#">مردانه</a>

          <div className="menu-sub__male">
            <ul>
              <strong>لباس مردانه</strong>
              <li className="list-unstyled">
                <a href="#">تیشرت</a>{" "}
              </li>
              <li className="list-unstyled">
                <a href="#">بیراهن</a>{" "}
              </li>
              <li className="list-unstyled">
                <a href="#">کت و شلوار</a>{" "}
              </li>
            </ul>
          </div>
        </li>
        <li className="list-unstyled famale__link">
          <a href="#">زنانه</a>
          <div className="menu-sub__female">
            <ul>
              <strong>لباس زنانه</strong>
              <li className="list-unstyled">
                <a href="#">مانتو</a>{" "}
              </li>
              <li className="list-unstyled">
                <a href="#">شلوار</a>{" "}
              </li>
              <li className="list-unstyled">
                {" "}
                <a href="#">دامن</a>{" "}
              </li>
            </ul>
          </div>
        </li>
        <li className="list-unstyled baby__link">
          <a href="#">بچگانه</a>

          <div className="baby-sub__female ">
            <ul>
              <strong>لباس بچگانه</strong>
              <li className="list-unstyled">
                <a href="#">لباس نوزاد</a>{" "}
              </li>
              <li className="list-unstyled">
                <a href="#">لوازم غذا خوری </a>{" "}
              </li>
              <li className="list-unstyled">
                {" "}
                <a href="#">شیشه شیر</a>{" "}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default Menu;
