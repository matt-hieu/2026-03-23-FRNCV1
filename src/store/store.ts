import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/IProducts";

// interface IStore{
//     products:Array<IProduct>
//     selectedProduct:undefined|IProduct
// }
const initialState = {
  products: [],
  selectedProduct: undefined,
  
};

const loadProducts=(arrayProd)=>({type:'LOAD_PRODUCTS',payload:arrayProd })
const loadSelected=(selectedP)=>({type:'SELECT_PRODUCT',payload:selectedP })

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...state, products: [...state.products, ...action.payload] };

    case "SELECT_PRODUCT":
      return { ...state, selectedProduct: action.payload };
    default:
      return state;
  }
};

const reducerPop = (state = {message:'',isShow:false}, action) => {
    console.trace(action.type)
  switch (action.type) {
    default:
      return state;
  }
};
export const store=configureStore({reducer:{stock:reducer,}})
store.subscribe(()=>{
    console.trace(store.getState());
    
})


store.dispatch(loadProducts([{id:100},{id:2445}]))


//store.dispatch(loadSelected(store.getState().products[0]))
