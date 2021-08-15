import React from 'react'
import { BiHeart} from "react-icons/bi";
import { IProduct } from '../../interface';
import "./ProductItem.style.scss";
interface IProductItem{
    item:IProduct
    handleChangeImg:Function
    handleChangeLiveImg:Function
    onClick?:Function | undefined
    onClickHistory?:Function
}
const ProductItem:React.FC<IProductItem> = ({item,handleChangeLiveImg,handleChangeImg,onClick,onClickHistory}) => {

    return (
        <div className="d-flex flex-column" onMouseLeave={()=>handleChangeLiveImg()} onMouseEnter={()=> handleChangeImg()} onClick={()=>(onClick)&&onClick()}>
        <div className="product___card" onClick={()=>(onClickHistory)&&onClickHistory()}>
        <img src={item.img} alt={item.name} className={`${item.name} img-product`} />
        {item.discount ? <small className="descount d-flex justify-content-center align-items-center"> %{item.discount}</small> : null}
        <div className="product___heart">
           <BiHeart  size={28} />
        </div>
        <div className="product___card-bg"></div>
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
    )
}

export default ProductItem