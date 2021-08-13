import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import {products} from "../../../Data/Data";
import {IProduct} from "../../../interface"
interface IState{
    cart:IProduct[]
    productsData:IProduct[]
}
let init:IState = {
    cart:[],
    productsData: products
}
 const productReducer = createSlice({
 name:"productReducer",
 initialState:init,
 reducers:{
 
     productsCategoryFilter:(state,action: PayloadAction<string>)=>{
          state.productsData = init.productsData.filter((item)=>item.category ===  action.payload)
     },
     productChangeImg:(state,action: PayloadAction<number>)=>{
         state.productsData = state.productsData.map((item,index)=> item.id === action.payload ? {...item,img:item.subImg} : item)
     },
     productChangeSubImg:(state,action: PayloadAction<string>)=>{
        state.productsData = init.productsData.filter((item)=>item.category ===action.payload)
     },
    //  add To Cart
    addToCart:(state,action)=>{
        state.cart.push(action.payload)
    },
    updateCart:(state,action: PayloadAction<number>)=>{
        state.cart = state.cart.map((item)=>item.id === action.payload ? {...item,count:item.count + 1} : item)
    },
    updateCountCard:(state,action: PayloadAction<number>)=>{
        state.cart = state.cart.map((item)=>item.id === action.payload ? {...item,count: item.count + 1} :item)
    },
    updateTotalCart:(state,action: PayloadAction<number>)=>{
       state.cart = state.cart.map((item)=>item.id === action.payload ? {...item,totalPrice:(item.discount) ?(item.price - (item.price * item.discount) / 100 ) * item.count : item.price * item.count} : item)
   } , 
  updateCountMinusCard:(state,action: PayloadAction<number>)=>{
        state.cart = state.cart.map((item)=>item.id === action.payload ? {...item,count: item.count - 1} :item)
    },
    removeProductCard:(state,action: PayloadAction<number>)=>{
        state.cart = state.cart.filter((item)=>item.id !== action.payload)
    },
    checkCountCart:(state,action: PayloadAction<number>)=>{
       state.cart =  state.cart.map((item)=>item.id === action.payload ? {...item,count: 1} :item)
    },
  

 }
})
export const {productsCategoryFilter,productChangeImg,productChangeSubImg,addToCart,updateCart,updateCountCard,updateCountMinusCard,checkCountCart,removeProductCard,updateTotalCart} = productReducer.actions;
export default productReducer.reducer;