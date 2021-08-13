import React,{useEffect} from 'react'
import { Row, Col, Container } from "react-bootstrap";
import {
  ProductItem,
  SidebarFilterProduct,
  SidebarFilterSize,
  ProductStored,
  SidebarChidren,
} from "../../components";
import { useDispatch,useSelector } from 'react-redux';
import { products } from "./../../Data/Data";
import { useParams ,useHistory,useRouteMatch} from 'react-router';
import { IProduct } from "./../../interface";
import { RootState } from '../../Store/reducers/store';
import { productsCategoryFilter,productChangeImg,productChangeSubImg } from '../../Store/reducers/product.reducer/product.reducer';
import "./CategoryProducts.style.scss"
function CategoryProducts() {

    let {category_name }= useParams<{category_name:string}>();
    // const [prouctItems,setProductItems] = React.useState<IProduct[]>()
    const prouctItems = useSelector((state:RootState)=>state.productsItems);
    const dispatch = useDispatch()
    const history = useHistory()
    const match = useRouteMatch()
    useEffect(() => {
     dispatch(productsCategoryFilter(category_name))
    }, [category_name])
    React.useEffect(()=>{
      window.scrollTo(0,0)
    },[])

      const handleChangeImg = (id: number): void => {
        dispatch(productChangeImg(id))
      };
    
      const handleChangeLiveImg = (): void => {
        dispatch(productChangeSubImg(category_name))
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
              // <SidebarFilterSize />

           
                  
                  <select name="filter-size" className="select-filter my-2 my-lg-0">
                  <option value="">همه</option>
                    {
                     prouctItems.productsData.map((item,index)=>(
                      <option key={item.id} value={item.size}  >{item.size}</option>

                    ))
                    }
                  </select>
                }
            </Col>
            <Col lg={8}>
              <ProductStored />
             

              <Row>
                {
                   prouctItems.productsData.map((item: IProduct, index: number) => (
                    <Col lg={6} key={item.id}>
                      <ProductItem
                        item={item}
                        onClickHistory={()=>history.push(`${match.url}/${item.id}`)}
                        handleChangeImg={() => handleChangeImg(item.id)}
                        handleChangeLiveImg={() => handleChangeLiveImg()}
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
