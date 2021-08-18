import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage' 
import authReducer from "../reducers/auth.reducer/auth.reducer";
import productReducer from "../reducers/product.reducer/product.reducer"
import productSingleReducer from "../reducers/produtSingle.reducer/productSingle.reducer";
import wishReducer from "../reducers/wishList.reducer/wishList.reducer";
let rootReducer = combineReducers({
        productsItems:productReducer,
        productItem:productSingleReducer,
        auth:authReducer,
        wishList:wishReducer
})

const persistConfig = {
    key:"root",
    storage
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)