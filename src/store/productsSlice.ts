import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../interfaces/IProducts';
interface IProductsSliceState{
    products:Array<IProduct>
    selectedProduct:undefined|IProduct
    filtredProducts:Array<IProduct>
    search:string
}
const initialState:IProductsSliceState = {
    products:[],
    filtredProducts:[],
    selectedProduct:undefined,
    search:''
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   initialProductLoad:(state,action:{type:string,payload:Array<IProduct>})=>{
    //vidange
    state.products.splice(0)
    //remplissage avec chaque element contenu dans l'array un par un 
    state.products.push(...action.payload)
   }
  }
});

export const {initialProductLoad} = productsSlice.actions
const productsReducer= productsSlice.reducer
export default productsReducer