import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import CartPageModalRemove from '../CartPage/CartPageModalRemove'
import {removeProductWish} from "../../Store/reducers/wishList.reducer/wishList.reducer"
import { ProductItem } from '../../components'
import { RootState } from '../../Store/store'
import { BsXCircle } from "react-icons/bs";
import { useHistory } from 'react-router'
import { IProduct } from '../../interface'
import "./wishListPage.style.scss"
const WishListPage = () => {
     const {wishList} = useSelector((state:RootState)=>state.reducer.wishList)
     const [modalShow, setModalShow] = React.useState(false);
     const [productID,setProductID] = React.useState<number>(0)
     const history = useHistory()
     const dispatch = useDispatch()
   

     const handleShowModalIcon = (id:number)=>{
        setModalShow(true)
        setProductID(id)
     }


     const handleRemoveProduct = ()=>{
         dispatch(removeProductWish(productID))
         setModalShow(false)
     }

     if(wishList.length === 0){
        return (
            <div style={{margin:"100px 0"}} className="d-flex  flex-column justify-content-center align-items-center">
                <img src="https://www.banimode.com/themes/new/assets/images/thank-unsucess.svg" alt="" />
                <p className="my-4"> لیست علاقه مندی   شما خالی است </p>
            </div>
        )
    }
    return (
        <div>
            <Container>
                <div className="my-5 d-flex justify-content-center justify-content-lg-start">
                    <h5>لیست علاقه مندی ها</h5>

                </div>
                <Row>
                   {
                       wishList.map((item:IProduct)=>(
                          <Col key={item.id} lg={3} className="wishList-product">
                                <ProductItem 
                                onClick={()=>history.push(`/category/amazing/${item.id}`)}
                                item={item}
                                isWish={true}
                                />
                                <BsXCircle 
                                   onClick={()=>handleShowModalIcon(item.id)}
                                   size={23}
                                   className="card__product__btn__remove"/>
                          </Col>
                       ))
                   }
                    
                </Row>
            </Container>

            <CartPageModalRemove
             show={modalShow}
             onHide={() => setModalShow(false)}
             onClick={()=>handleRemoveProduct()}
          />
        </div>
    )
}

export default WishListPage
