import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  ProductItem,
  SidebarFilterProduct,
  SidebarFilterSize,
  ProductStored,
  SidebarChidren,
} from "../..";
import { productsMale } from "../../../Data/Data";
import { IProduct } from "../../../interface";

const ProductCout = () => {
  const [productItems, setProductItems] = React.useState<IProduct[]>(
    productsMale.cout
  );

  const handleChangeImg = (id: number): void => {
    setProductItems(
        productsMale.cout.map((item: any) =>
        item.id === id ? { ...item, img: item.subImg } : item
      )
    );
  };

  const handleChangeLiveImg = (id: number): void => {
    setProductItems(productsMale.cout);
  };
  return (
    <>
      <Container>
      <p className="py-2 title-category" style={{color:"#f16422",fontWeight:600}}>{" مردانه>>  کت وشلوار"}</p>


        <Row className="d-flex justify-content-between">
          <Col lg={3}>
            <SidebarChidren>
              <SidebarFilterProduct lable={"Brands"} name={"Brands"} />
              <SidebarFilterProduct lable={"Curom"} name={"Curom"} />
              <SidebarFilterProduct lable={"LRC"} name={"LRC"} />
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

export default ProductCout;
