import { Button, Dimensions, Modal, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import {searchByBarcode} from '../../../store/productsSlice'
import { useNavigation } from "@react-navigation/native";
type Props = {};

const BarcodeScanner = (props: Props) => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [modalVisible, setModalVisibility] = useState<boolean>(false);
  const [found, setFound] = useState('')
  const d=useDispatch<AppDispatch>()
  const nav=useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <Text>BarcodeScanner</Text>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisibility(false);
        }}
      >
        <View style={styles.centeredView}>
          <Text>BarCode Found : {found}</Text>
          <Button title="Ok" onPress={()=>{
            d(searchByBarcode(found))
            //@ts-ignore
            nav.navigate('store')

          }}/>
          <Button title="Cancel" onPress={()=>setModalVisibility(false)}/>
        </View>
      </Modal>
      <CameraView
        style={styles.cam}
        facing={facing}
        barcodeScannerSettings={{
          barcodeTypes: ["ean8", "ean13", "upc_a", "upc_e"],
        }}
        onBarcodeScanned={(evt) => {
          console.log(evt);
          setFound(evt.data)
          setModalVisibility(true);
        }}
      />
    </View>
  );
};

export default BarcodeScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  cam: {
    height: Dimensions.get("screen").height - 150,
    width: Dimensions.get("screen").width,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
