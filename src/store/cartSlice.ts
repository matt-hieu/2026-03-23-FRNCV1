import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../interfaces/IProducts';
interface ICartSliceState{
    products:Array<IProduct>
}
const initialState:ICartSliceState = {
    products:[]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct:(state, action:{type:string,payload:IProduct})=>{
        const position=state.products.findIndex(p=>p.id===action.payload.id)
        if(-1===position){
            action.payload.quant=1
            state.products.push(action.payload)
        }
        else{
            const p=state.products[position]
            if(undefined!==p.quant)p.quant++
            else p.quant=2
        }
    }
  }
});

export const {addProduct} = cartSlice.actions

export default cartSlice.reducer