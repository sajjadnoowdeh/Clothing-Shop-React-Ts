import {createAsyncThunk, createSlice,PayloadAction} from "@reduxjs/toolkit"
import {products} from "../../../Data/Data";
import { getProductSingle } from "./productSingle.reducer.api";
import {IProduct} from "../../../interface"
interface IState{
    product:any
    loading:boolean
    error:string | undefined
}
let init:IState = {
    product:{},
    loading:false,
    error:""
}

export const getProductSingleThunk = createAsyncThunk(
    "productSingleReducer",
    async(payload:{id:string,category_name:string})=>{
        console.log(payload);
        
        try {
            let data = await getProductSingle(payload.id,payload.category_name);
            console.log(data)
            return data;
        } catch (error) {
             throw error.response.data
        }
        

    }
)


 const productSingleReducer = createSlice({
 name:"productSingleReducer",
 initialState:init,
 reducers:{
 
//      productChangeImg:(state,action: PayloadAction<number>)=>{
//          state.productsData = state.productsCategory.map((item:IProduct,index:number)=> item.id === action.payload ? {...item,img:item.subImg} : item)
//      },
//      productChangeSubImg:(state,action: PayloadAction<string>)=>{
//         state.productsData = init.productsData.filter((item)=>item.category ===action.payload)
//      },
//     //  add To Cart
//     addToCart:(state,action)=>{
//         state.cart.push(action.payload)
//     },
//     updateCart:(state,action: PayloadAction<number>)=>{
//         state.cart = state.cart.map((item)=>item.id === action.payload ? {...item,count:item.count + 1} : item)
//     },
//     updateCountCard:(state,action: PayloadAction<number>)=>{
//         state.cart = state.cart.map((item)=>item.id === action.payload ? {...item,count: item.count + 1} :item)
//     },
//     updateTotalCart:(state,action: PayloadAction<number>)=>{
//        state.cart = state.cart.map((item)=>item.id === action.payload ? {...item,totalPrice:(item.discount) ?(item.price - (item.price * item.discount) / 100 ) * item.count : item.price * item.count} : item)
//    } , 
//   updateCountMinusCard:(state,action: PayloadAction<number>)=>{
//         state.cart = state.cart.map((item)=>item.id === action.payload ? {...item,count: item.count - 1} :item)
//     },
//     removeProductCard:(state,action: PayloadAction<number>)=>{
//         state.cart = state.cart.filter((item)=>item.id !== action.payload)
//     },
//     checkCountCart:(state,action: PayloadAction<number>)=>{
//        state.cart =  state.cart.map((item)=>item.id === action.payload ? {...item,count: 1} :item)
//     },
  

 },

 extraReducers:(builder)=>{
    builder.addCase(getProductSingleThunk.pending,(state,action)=>{
        state.loading = true
    })
    builder.addCase(getProductSingleThunk.fulfilled,(state,action)=>{
        state.loading= false;
        state.product = action.payload
    })
    builder.addCase(getProductSingleThunk.rejected,(state,action)=>{
        state.loading= false;
       state.error =  "";
    })
 }
})
export const {} = productSingleReducer.actions;
export default productSingleReducer.reducer;