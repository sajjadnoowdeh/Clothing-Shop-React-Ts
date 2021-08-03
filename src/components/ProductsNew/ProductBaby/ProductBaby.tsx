import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BiShoppingBag, BiSearch } from "react-icons/bi";
import {
  ProductItem,
  SidebarFilterProduct,
  SidebarFilterSize,
  ProductStored,
  SidebarChidren,
} from "../..";
import { productsNew } from "../../../Data/Data";
import { IProduct } from "../../../interface";

const ProductBaby = () => {
  const [productItems, setProductItems] = React.useState<IProduct[]>(
    productsNew.baby
  );

  const handleChangeImg = (id: number): void => {
    setProductItems(
      productsNew.baby.map((item: any) =>
        item.id === id ? { ...item, img: item.subImg } : item
      )
    );
  };

  const handleChangeLiveImg = (id: number): void => {
    setProductItems(productsNew.baby);
  };
  return (
    <>
      <Container>
      <p className="py-2 title-category" style={{color:"#f16422",fontWeight:600}}>{"جدیدترین ها>>  بچگانه"}</p>
      

        <Row className="d-flex justify-content-between">
          <Col lg={3}>
            <SidebarChidren>
              <SidebarFilterProduct lable={"دخترانه"} name={"girl"} />
              <SidebarFilterProduct lable={"بسرانه"} name={"boy"} />
              <SidebarFilterProduct lable={"نوزاد"} name={"baby"} />
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
  );
};

export default ProductBaby;
