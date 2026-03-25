import { Image, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const ScanIcon = (props: Props) => {
    const n=useNavigation()
    // useEffect(() => {
    //  console.log(Platform.constants);
    // }, [Platform])
  return (
    Platform.OS==="web"?null:
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