import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import { BiShoppingBag, BiSearch } from "react-icons/bi";
import {
  ProductItem,
  SidebarFilterProduct,
  SidebarFilterSize,
  ProductStored,
  SidebarChidren,
} from "./..";
import { productsFamale } from "./../../Data/Data";
import { IProduct } from "./../../interface";
const ProductPantsFamale = () => {
    const [productItems, setProductItems] = React.useState<IProduct[]>(
        productsFamale.pantes
      );
    
      const handleChangeImg = (id: number): void => {
        setProductItems(
            productsFamale.pantes.map((item: IProduct) =>
            item.id === id ? { ...item, img: item.subImg } : item
          )
        );
      };
    
      const handleChangeLiveImg = (id: number): void => {
        setProductItems(productsFamale.pantes);
      };
    return (
        <>
        <Container>
        <p className="py-2 title-category" style={{color:"#f16422",fontWeight:600}}>{" زنانه>>  شلوار"}</p>

          <Row className="d-flex justify-content-between">
            <Col lg={3}>
              <SidebarChidren>
                <SidebarFilterProduct lable={"Ziboo"} name={"Ziboo"} />
                <SidebarFilterProduct lable={"LS"} name={"LS"} />
                <SidebarFilterProduct lable={"Jootisweat"} name={"Jootisweat"} />
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

export default ProductPantsFamale
