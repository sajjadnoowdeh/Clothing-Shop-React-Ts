import React from "react";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import {links,linksMale,linksFamale,linksBaby} from "../../routers/menu"
import MenuList from "./MenuList/MenuList";
import "./Menu.style.scss"
const Menu = () => {
  return (
    <Container fluid className="d-none d-lg-flex section-menu mb-4">
      <ul className="d-flex menu justify-content-around mt-3 ">
        <li className="list-unstyled newDress__link ">
          <Link to="/newset">  جدیدترین ها</Link>
  
          <div className="category__subnew">
            <ul>
              <strong>
                   جدبدترین ها
                </strong>
                <MenuList data={links} />
            </ul>
          </div>
        </li>
        <li className="list-unstyled male__link ">
         
          <Link to="/maleAll">مردانه</Link>
        

          <div className="menu-sub__male">
            <ul>
              <strong>لباس مردانه</strong>
              <MenuList data={linksMale} />
            </ul>
          </div>
        </li>
        <li className="list-unstyled famale__link">
          <Link to="/famaleAll">زنانه</Link>
          <div className="menu-sub__female">
            <ul>
              <strong>لباس زنانه</strong>
                 <MenuList data={linksFamale} />
            </ul>
          </div>
        </li>
        <li className="list-unstyled baby__link">
          <Link to="/baby" >بچگانه</Link>

          <div className="baby-sub__female ">
            <ul>
              <strong>لباس بچگانه</strong>
              <MenuList data={linksBaby} />
            </ul>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default Menu;
