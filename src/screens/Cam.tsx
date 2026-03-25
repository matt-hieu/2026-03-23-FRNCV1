import { View  } from 'react-native'
import React from 'react'
import BarcodeScanner from '../components/functionnals/BarcodeScanner/BarcodeScanner'

type Props = {}

const Cam = (props: Props) => {
    
  return (
    <View style={{flex:1}} >
      <BarcodeScanner/>
    </View>
  )
}

export default Cam