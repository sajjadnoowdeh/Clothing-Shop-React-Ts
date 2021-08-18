import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { ProductItem } from '../../components'
import { RootState } from '../../Store/store'
import { useHistory } from 'react-router'
import { IProduct } from '../../interface'
const WishListPage = () => {
     const {wishList} = useSelector((state:RootState)=>state.reducer.wishList)
     const history = useHistory()
     const dispatch = useDispatch()
     const handleChangeImg =(id:number):void=>{
        
     }
     
      const handleChangeLiveImg =(id:number):void=>{
     
  }

     const handleWishListAdd = (id:number)=>{
        //   dispatch(getWishListThunk({id:id,category_name:"amazing"}))     
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
                          <Col key={item.id} lg={3}>
                                <ProductItem 
                                onClick={()=>history.push(`/category/amazing/${item.id}`)}
                                item={item}
                                handleChangeImg={()=>handleChangeImg(item.id)}
                                handleChangeLiveImg={()=>handleChangeLiveImg(item.id)}
                                handleWishListAdd={()=>handleWishListAdd(item.id)}
                                isWish={true}
                                />
                          </Col>
                       ))
                   }
                    
                </Row>
            </Container>
        </div>
    )
}

export default WishListPage
