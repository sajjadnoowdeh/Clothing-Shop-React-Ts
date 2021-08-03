import React from 'react'

import { Row, Col, Container } from "react-bootstrap";
import { ProductItem,ProductStored } from "../..";
import { BiShoppingBag,BiSearch } from "react-icons/bi";
import { SidebarFilterProduct,SidebarFilterSize,SidebarChidren } from '../..';
import { productsNew } from "../../../Data/Data";
import { IProduct } from "../../../interface";

const ProductMale = () => {
    const [productItems, setProductItems] = React.useState<IProduct[]>(productsNew.male);

    const handleChangeImg = (id: number): void => {
      setProductItems(productsNew.male.map((item:any)=>item.id === id ? {...item,img:item.subImg} : item))
    };
  
    const handleChangeLiveImg = (id: number): void => {
      setProductItems(productsNew.male);
    }
    return (
        <>
        <Container>
        <p className="py-2 title-category" style={{color:"#f16422",fontWeight:600}}>{"جدیدترین ها>>  مردانه"}</p>

        <Row className="d-flex justify-content-between">
          <Col lg={3}>
             <SidebarChidren>
                <SidebarFilterProduct 
                  lable={"بیراهن"}
                  name={"shirt"}
                />
                <SidebarFilterProduct
                  lable={"کت"}
                  name={"coat"}
                />
                <SidebarFilterProduct
                  lable={"شلوار"}
                  name={"pants"}
                />   
             </SidebarChidren>
                
          
      
              {/*selcet inputs  */}
             <SidebarFilterSize />
               
           
           
          </Col>
          <Col lg={8}>
            <ProductStored />
            <Row>
            { (productItems) &&  productItems.map((item: IProduct, index: number) => (
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

export default ProductMale
