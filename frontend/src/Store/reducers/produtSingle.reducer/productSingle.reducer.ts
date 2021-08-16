import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products } from "../../../Data/Data";
import { getProductSingle } from "./productSingle.reducer.api";
import { IProduct } from "../../../interface";
interface IState {
  product: any;
  loading: boolean;
  error: string | undefined;
}
let init: IState = {
  product: {},
  loading: false,
  error: "",
};

export const getProductSingleThunk = createAsyncThunk(
  "productSingleReducer",
  async (payload: { id: string; category_name: string }) => {
    console.log(payload);

    try {
      let data = await getProductSingle(payload.id, payload.category_name);
      console.log(data);
      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const productSingleReducer = createSlice({
  name: "productSingleReducer",
  initialState: init,
  reducers: {
    changeImgProduct: (state, action: PayloadAction<string>) => {
      state.product = { ...state.product, img: action.payload };
    },
    changeSubImgProduct: (state, action: PayloadAction<string>) => {
      state.product = { ...state.product, img: action.payload };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProductSingleThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProductSingleThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(getProductSingleThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = "";
    });
  },
});
export const { changeImgProduct, changeSubImgProduct } =
  productSingleReducer.actions;
export default productSingleReducer.reducer;
