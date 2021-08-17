import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLogin } from "./auth.reducer.api";
import { IProduct } from "../../../interface";
interface IState {
  username:any
  email:any
  password:any
  token:string
  tokenRefresh:string
  isLogin:any
  loading:boolean
  err:string | undefined
}
let init: IState = {
    username:"",
    email:"",
    password:"",
    token:"",
    tokenRefresh:"",
    isLogin:false,
    loading:false,
    err:""
};

export const getAuthThunk = createAsyncThunk(
  "authReducer",
  async (payload: { email: string; password: string }) => {
    console.log(payload);

    try {
      let data = await getLogin(payload);
      console.log(data);
      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const authReducer = createSlice({
  name: "authReducer",
  initialState: init,
  reducers: {
   
    logoaut:(state)=>{
        state.isLogin = false;
        state.username=""
        state.email=""
        state.password=""
    }
  },

  extraReducers: (builder) => {
    builder.addCase(getAuthThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAuthThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.isLogin = true;
      state.username = action.payload;
      state.password = action.payload;
      state.email = action.payload;

    });
    builder.addCase(getAuthThunk.rejected, (state, action) => {
      state.loading = false;
      state.err = action.error.message;
    });
  },
});
export const { logoaut } =
  authReducer.actions;
export default authReducer.reducer;
