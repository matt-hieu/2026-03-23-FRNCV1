import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { initialProductLoad, loadRestAPI } from "./productsSlice";
//import {products} from '../../db.json'
import cartReducer from "./cartSlice";
export const store=configureStore({
  reducer:{stock:productsReducer,cart:cartReducer}
})
store.subscribe(()=>console.trace(store.getState()))

//store.dispatch(initialProductLoad(products))
store.dispatch(loadRestAPI())
// setInterval(()=>{
//   store.dispatch(loadRestAPI())
// },2000)



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;