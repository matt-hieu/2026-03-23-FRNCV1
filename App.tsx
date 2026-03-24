import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProductViewer from "./src/ProductViewer/ProductViewer";
import { IProduct } from "./src/interfaces/IProducts";

export default function App() {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  useEffect(() => {
    fetch(
      `${
        process.env.EXPO_PUBLIC_API_URL
      }:${
        process.env.EXPO_PUBLIC_API_PORT
      }${
        process.env.EXPO_PUBLIC_API_ENDPOINT_PRODUCTS
      }`,
    )
      .then((r) => r.json())
      .then((a) => setProducts(a));
  }, []);

  return (
    <View style={styles.container}>
      {products.length>0&&<ProductViewer product={products[0]}/>}
      {/*<Text>{JSON.stringify(products)}</Text>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
