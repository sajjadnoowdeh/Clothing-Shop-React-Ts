import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products } from "../../../Data/Data";
import { getWishProduct } from "./wishList.api.reducer";
import { IProduct } from "../../../interface";
interface IState {
  wishList: any;
  loading: boolean;
  error: string | undefined;
  wishProduct:any
}
let init: IState = {
  wishList: [],
  loading: false,
  error: "",
  wishProduct:{}
};

export const getWishListThunk = createAsyncThunk(
  "wishReducer",
  async (payload: { id: number}) => {
    console.log(payload);

    try {
      let data = await getWishProduct(payload.id);
      console.log(data);
      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const wishReducer = createSlice({
  name: "wishReducer",
  initialState: init,
  reducers: {
    removeProductWish : (state,action: PayloadAction<number>)=>{
        state.wishList = state.wishList.filter((item:IProduct)=>item.id !== action.payload)
    }
    // changeImgProduct: (state, action: PayloadAction<string>) => {
    //   state.product = { ...state.product, img: action.payload };
    // },
    // changeSubImgProduct: (state, action: PayloadAction<string>) => {
    //   state.product = { ...state.product, img: action.payload };
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(getWishListThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getWishListThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.wishList.push(action.payload);
      state.wishProduct = action.payload
    });
    builder.addCase(getWishListThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const { removeProductWish} =
wishReducer.actions;
export default wishReducer.reducer;
