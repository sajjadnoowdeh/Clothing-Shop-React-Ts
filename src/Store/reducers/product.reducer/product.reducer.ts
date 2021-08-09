import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import {products} from "../../../Data/Data";
import {IProduct} from "../../../interface"
interface IState{
    productsData:IProduct[]
}
let init:IState = {
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
     }
 }
})
export const {productsCategoryFilter,productChangeImg,productChangeSubImg} = productReducer.actions;
export default productReducer.reducer;