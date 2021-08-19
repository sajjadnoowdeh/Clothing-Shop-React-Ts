import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import { persistedReducer } from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger"
let store = configureStore({
    reducer:{
        reducer:persistedReducer,
    },
    middleware:[thunk,logger]
  
})



export default store;
export  const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch