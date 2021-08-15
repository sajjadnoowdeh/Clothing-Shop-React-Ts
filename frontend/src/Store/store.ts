import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/product.reducer/product.reducer";
import productSingleReducer from "./reducers/produtSingle.reducer/productSingle.reducer";
import thunk from "redux-thunk";
import logger from "redux-logger"
let store = configureStore({
    reducer:{
        productsItems:productReducer,
        // productItem:productSingleReducer
    },
    middleware:[thunk,logger]

})

export default store;


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch