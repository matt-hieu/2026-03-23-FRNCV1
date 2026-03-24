import { View, Text } from 'react-native'
import React from 'react'
import ProductsSearcherUnconnected from './ProductsSearcher'
import { connect, useSelector } from 'react-redux'
type Props = {
    onSearchChange:(search:string)=>void
}

const ProductsSearcher = (props: Props) => {
    const products=useSelector((s:any)=>s.stock.products)
    const search=useSelector((s:any)=>s.stock.search)

  return (
    <ProductsSearcherUnconnected {...props} products={products} searchField={search}/>
  )
}

export default ProductsSearcher

function mapDispatchToProps(dispatch:Function){return{}}
function mapStateToProps(props:Props,state:any){
    return {
        ...props,
        products:state.stock.products,
        search:state.stock.search
    }
}
export const ProductsSearcherNoHook=connect(mapStateToProps)(ProductsSearcherUnconnected)
