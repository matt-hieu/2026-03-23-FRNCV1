import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../interfaces/IProducts';

interface ICartSliceState {
    products: Array<IProduct>
}

const initialState: ICartSliceState = {
    products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
        const position = state.products.findIndex(p => p.id === action.payload.id);
        
        if (position === -1) {

            const pr: IProduct = { ...action.payload, quant: 1 };
            state.products.push(pr);
        } else {

            const p = state.products[position];
            p.quant = (p.quant || 1) + 1;
        }
    },

    removeProduct: (state, action: PayloadAction<IProduct>) => {
        const position = state.products.findIndex(p => p.id === action.payload.id);

        if (position !== -1) {
            const p = state.products[position];
            
            if (p.quant && p.quant > 1) {
 
                p.quant--;
            } else {

                state.products.splice(position, 1);
            }
        }
    }
  }
});


export const { addProduct, removeProduct } = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;