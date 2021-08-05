import React,{useEffect} from 'react'
import { Row, Col, Container } from "react-bootstrap";
import {
  ProductItem,
  SidebarFilterProduct,
  SidebarFilterSize,
  ProductStored,
  SidebarChidren,
} from "../../components";
import { products } from "./../../Data/Data";
import { useParams ,useHistory,useRouteMatch} from 'react-router';
import { IProduct } from "./../../interface";

function CategoryProducts() {

    let {category_name }= useParams<{category_name:string}>();
    const [prouctItems,setProductItems] = React.useState<IProduct[]>()
    const history = useHistory()
    const match = useRouteMatch()
    useEffect(() => {
     
     setProductItems(products.filter((item)=>item.category ===  category_name))
    }, [category_name])
    
    useEffect(() => {
         console.log(prouctItems)
         console.log(match);
         
    }, [prouctItems])

    
      const handleChangeImg = (id: number): void => {
        (prouctItems) &&  setProductItems(
            prouctItems.map((item: IProduct) =>
            item.id === id ? { ...item, img: item.subImg } : item
          )
        );
      };
    
      const handleChangeLiveImg = (id: number): void => {
        setProductItems(products.filter((item)=>item.category ===  category_name))
      };
    return (
        <>
        <Container>
        {/* <p className="py-2 title-category" style={{color:"#f16422",fontWeight:600}}>{" بچگانه>>   کاپشن"}</p> */}

          <Row className="d-flex justify-content-between py-4">
            <Col lg={3}>
              <SidebarChidren>
                <SidebarFilterProduct lable={"LC"} name={"LC"} />
                <SidebarFilterProduct lable={"Fiorlla"} name={"Fiorlla"} />
                <SidebarFilterProduct lable={"Baleno"} name={"Baleno"} />
              </SidebarChidren>
  
                {
                  (category_name !== "theWatch") &&
              <SidebarFilterSize />
                }
            </Col>
            <Col lg={8}>
              <ProductStored />
              <Row>
                {
               (prouctItems)&&   prouctItems.map((item: IProduct, index: number) => (
                    <Col lg={6} key={item.id}>
                      <ProductItem
                        item={item}
                        onClickHistory={()=>history.push(`${match.url}/${item.id}`)}
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

export default CategoryProducts
