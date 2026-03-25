import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './CartIcon.style';
import { useNavigation } from '@react-navigation/native';

interface ICartIconProps {
  quantity: number;
}
const CartIcon = ({quantity}: ICartIconProps) => {
  const nav=useNavigation()
  return (
    <TouchableOpacity onPress={()=>{
      //@ts-ignore
        nav.navigate('cart')
      }}>
      <Image
        source={require('./trolley.png')}
        style={style.icon}
      />
      {quantity > 0 && (
        <View style={style.cartIconContainer}>
          <Text style={style.quantity}>
            {quantity > 999 ? '999+' : quantity}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartIcon;
