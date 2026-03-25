import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const ScanIcon = (props: Props) => {
    const n=useNavigation()
  return (
    <TouchableOpacity onPress={()=>{
        //@ts-ignore
        n.navigate('scan')
    }}>
      <Image source={require('./scan.png')} style={{width:32,height:32}}/>
    </TouchableOpacity>
  )
}

export default ScanIcon

const styles = StyleSheet.create({})