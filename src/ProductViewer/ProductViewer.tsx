import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {IProduct} from '../interfaces/IProducts'
interface IProductViewerProps {
    product:IProduct
}

const ProductViewer = ({product}: IProductViewerProps) => {
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default ProductViewer

const styles = StyleSheet.create({})