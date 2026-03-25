import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";

type Props = {};

const BarcodeScanner = (props: Props) => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  return (
    <View style={{flex:1}}>
      <Text>BarcodeScanner</Text>
      <CameraView style={styles.cam} facing={facing}/>
    </View>
  );
};

export default BarcodeScanner;

const styles = StyleSheet.create({
    cam:{
        height:Dimensions.get('screen').height-100,
        width: Dimensions.get('screen').width
    }
});
