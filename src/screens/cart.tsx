import { View, Text } from 'react-native'
import React from 'react'
import CartConnected from '../components/ui/Cart/Cart.connected'


const cart = () => {
  return (
    <View style={{flex:1}}>
      <CartConnected/>
    </View>
  )
}

export default cart