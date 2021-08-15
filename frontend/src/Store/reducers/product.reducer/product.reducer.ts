import {createAsyncThunk, createSlice,PayloadAction} from "@reduxjs/toolkit"
import {products} from "../../../Data/Data";
import { getCategoryProduct } from "./product.api";
import {IProduct} from "../../../interface"
interface IState{
    cart:IProduct[]
    productsCategory:any
    productsData:IProduct[]
    loading:boolean
    error:string | undefined
}
let init:IState = {
    cart:[],
    productsCategory:[],
    productsData: products,
    loading:false,
    error:""
}

export const getCategoryProductThunk = createAsyncThunk(
    "productReducer",
    async(category:string)=>{
        try {
            let data = await getCategoryProduct(category);
            console.log(data);
            
            return data;
        } catch (error) {
             throw error.response.data
        }
        

    }
)


 const productReducer = createSlice({
 name:"productReducer",
 initialState:init,
 reducers:{
 
     productChangeImg:(state,action: PayloadAction<number>)=>{
         state.productsCategory = state.productsCategory.map((item:IProduct,index:number)=> item.id === action.payload ? {...item,img:item.subImg} : item)
     },
     productChangeSubImg:(state,action: PayloadAction<string>)=>{
        state.productsCategory = init.productsData.filter((item)=>item.category ===action.payload)
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
  

 },

 extraReducers:(builder)=>{
    builder.addCase(getCategoryProductThunk.pending,(state,action)=>{
        state.loading = true
    })
    builder.addCase(getCategoryProductThunk.fulfilled,(state,action)=>{
        state.loading= false;
        state.productsCategory = action.payload
    })
    builder.addCase(getCategoryProductThunk.rejected,(state,action)=>{
        state.loading= false;
       state.error =  action.error.message;
    })
 }
})
export const {productChangeImg,productChangeSubImg,addToCart,updateCart,updateCountCard,updateCountMinusCard,checkCountCart,removeProductCard,updateTotalCart} = productReducer.actions;
export default productReducer.reducer;