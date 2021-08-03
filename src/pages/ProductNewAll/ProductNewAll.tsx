import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { RouteComponentProps } from "react-router";
import { ProductStored, ProductItem, SidebarFilterProduct,SidebarFilterSize ,SidebarChidren} from "../../components";
import { productsNewAll } from "../../Data/Data";
import { IProduct } from "../../interface";
import "./ProductNewAll.style.scss";
interface IProductsNEW extends RouteComponentProps {}
const ProductNewAll: React.FC<IProductsNEW> = () => {
  const [productItems, setProductItems] =
    React.useState<IProduct[]>(productsNewAll);

  const handleChangeImg = (id: number): void => {
    setProductItems(
      productItems.map((item: IProduct) =>
        item.id === id ? { ...item, img: item.subImg } : item
      )
    );
  };

  const handleChangeLiveImg = (id: number): void => {
    setProductItems(productsNewAll);
  };
  return (
    <>
      <Container>
        <p className="py-2 title-category" style={{color:"#f16422",fontWeight:600}}>جدیدترین ها</p>
        <Row className="justify-content-between">
          <Col lg={3}>
             <SidebarChidren>
                <SidebarFilterProduct 
                  lable={"مردانه"}
                  name={"male"}
                />
                <SidebarFilterProduct
                  lable={"زنانه"}
                  name={"famale"}
                />
                <SidebarFilterProduct
                  lable={"بچگانه"}
                  name={"baby"}
                />   
              </SidebarChidren>
                
              {/*selcet inputs  */}
             <SidebarFilterSize />
          </Col>
          <Col lg={8}>
            <ProductStored />
            <Row>
              {productItems.map((item: IProduct, index: number) => (
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

export default ProductNewAll;
