import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import {
  ProductItem,
  SidebarFilterProduct,
  SidebarFilterSize,
  ProductStored,
  SidebarChidren,
} from "./..";
import { produtsBabyAll } from "./../../Data/Data";
import { IProduct } from "./../../interface";

const ProductBabyAll = () => {
    const [productItems, setProductItems] = React.useState<IProduct[]>(
        produtsBabyAll
      );
    
      const handleChangeImg = (id: number): void => {
        setProductItems(
            produtsBabyAll.map((item: IProduct) =>
            item.id === id ? { ...item, img: item.subImg } : item
          )
        );
      };
    
      const handleChangeLiveImg = (id: number): void => {
        setProductItems( produtsBabyAll);
      };
    return (
        <>
        <Container>
        <p className="py-2 title-category" style={{color:"#f16422",fontWeight:600}}>{" بچگانه   "}</p>

          <Row className="d-flex justify-content-between">
            <Col lg={3}>
              <SidebarChidren>
                <SidebarFilterProduct lable={"LC"} name={"LC"} />
                <SidebarFilterProduct lable={"Fiorlla"} name={"Fiorlla"} />
                <SidebarFilterProduct lable={"Baleno"} name={"Baleno"} />
              </SidebarChidren>
  
              <SidebarFilterSize />
            </Col>
            <Col lg={8}>
              <ProductStored />
              <Row>
                {productItems &&
                  productItems.map((item: IProduct, index: number) => (
                    <Col lg={6} key={item.id}>
                      <ProductItem
                        item={item}
                        handleChangeImg={() => handleChangeImg(item.id)}
                        handleChangeLiveImg={() => handleChangeLiveImg(item.id)}
                      />
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    )
}

export default ProductBabyAll
