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
    removeProduct:(state,action:{type:string,payload:IProduct})=>{
        const position=state.products.findIndex(p=>p.id===action.payload.id)
        if(position===-1)return;
        if(undefined!==state.products[position].quant && state.products[position].quant>1){
            state.products[position].quant--
        }
        else{
            const tmpProductAfterRemoveElement=state.products.slice(position+1)
            state.products.splice(position)
            state.products.push(...tmpProductAfterRemoveElement)
        }
    },
    addProduct:(state, action:{type:string,payload:IProduct})=>{
        const pr:IProduct={...action.payload}
        const position=state.products.findIndex(p=>p.id===action.payload.id)
        if(-1===position){
            pr.quant=1
            state.products.push(pr)
        }
        else{
            const p=state.products[position]
            if(undefined!==p.quant)p.quant++
            else p.quant=2
        }
    }
  }
});

export const {addProduct, removeProduct} = cartSlice.actions

const cartReducer=cartSlice.reducer
export default  cartReducer