import React from 'react'
import { BiHeart} from "react-icons/bi";
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import { IProduct } from '../../interface';
import { products } from '../../Data/Data';
import "./ProductItem.style.scss";
interface IProductItem{
    item:IProduct
    handleChangeImg?:Function
    handleChangeLiveImg?:Function
    handleChangeClickImg?:Function
    handleChangeClickSubImg?:Function
    onClick?:Function | undefined
    onClickHistory?:Function
    handleWishListAdd?:Function | undefined
    isWish?:boolean
    wishID?:number
 
}
const ProductItem:React.FC<IProductItem> = ({item,handleChangeLiveImg,handleChangeImg,onClick,onClickHistory,handleWishListAdd,isWish,handleChangeClickImg,handleChangeClickSubImg}) => {

   const {wishList} = useSelector((state:RootState)=>state.reducer.wishList)
  
    return (
      <>
      <div className="section-product">
               <div className="d-flex flex-column" onMouseLeave={()=>(handleChangeLiveImg) && handleChangeLiveImg()} onMouseEnter={()=>(handleChangeImg)&& handleChangeImg()} onClick={()=>(onClick)&&onClick()}>
                    <div className="product___card" >
                    <img src={item.img} onClick={()=>(onClickHistory)&&onClickHistory()} alt={item.name} className={`${item.name} img-product`} />
                    {item.discount ? <small className="descount d-flex justify-content-center align-items-center"> %{item.discount}</small> : null}  
                    <div className="product___card-bg"></div>
                      {
                        (item.category !== "amazing" && item.category !== "suggest")?
                       <div className="d-flex img-down">
                     
                        <div className="product__card__help">
                          <img src={products[item.id -1].img} onClick={()=>(handleChangeClickSubImg)&&handleChangeClickSubImg()} alt={item.type}/>
                        </div>
                        <div className="product__card__help__sub">
                          <img src={products[item.id -1].subImg} alt={item.type}  onClick={()=>(handleChangeClickImg)&&handleChangeClickImg()}/>
                        </div>
                       </div>
                        : 
                        null
                      
                      }
                        
                   
                </div>

            

              <div className="d-flex justify-content-between py-3">
                <strong>{item.name}</strong>
                {item.discount ?     <small className="text-decoration-line-through text-muted"> {item.price}{" "}تومان</small> :
                    <small className="text-muted"> {item.price}{" "}تومان</small>
                }
            
              </div>

              <div className="d-flex justify-content-between pt-3 pb-1">
                <p className="m-0" style={{fontSize:"14px"}}>{item.type}</p>
                {item.discount ?     <small className="product___card-price"> { item.price - (item.price * item.discount) / 100}{" "}تومان</small> : null}
              </div>
              <div className="py-3 d-flex justify-content-start">
                <small className="product__card-size mb-2">{item.size}</small>
              </div>
            </div>
              {
                (isWish) ?
                 null:
                <div className="product___heart"  onClick={()=>(handleWishListAdd) && handleWishListAdd()} >
                  {
                    wishList.find((itemWish:IProduct)=>itemWish.id === item.id)
                    ?
                    <BiHeart className="mt-1" fill={"#00bf6f"}  size={28}/>
                    :
                    <BiHeart className="mt-1"  size={28} />
                  }
                </div>
              }
           
       
      </div>
        
    

   </>
    )
}

export default ProductItem
