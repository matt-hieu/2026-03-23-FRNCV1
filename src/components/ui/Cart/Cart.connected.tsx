import { View, Text } from "react-native";
import React from "react";
import CartUnconnected from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { addProduct, removeProduct } from "../../../store/cartSlice";

const Cart = () => {
  const prs = useSelector((s: RootState) => s.cart.products);
  const d=useDispatch<AppDispatch>()
  return (
    <CartUnconnected
      products={prs}
      onQuantChange={(pr, q) => {
        if(undefined!==pr.quant && q>pr.quant){
            d(addProduct(pr))
        }else if(undefined!==pr.quant && q<pr.quant){
            d(removeProduct(pr))
        }
        //console.log(pr, q);
      }}
    />
  );
};

export default Cart;
