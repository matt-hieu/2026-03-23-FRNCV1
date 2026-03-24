import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { IProduct } from "./src/interfaces/IProducts";
import ProductsListViewer from "./src/components/ui/ProductsListViewer/ProductsListViewer";

export default function App() {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [search, setSearch] = useState("coca")
  useEffect(() => {
    fetch(
      `${process.env.EXPO_PUBLIC_API_URL}:${process.env.EXPO_PUBLIC_API_PORT}${
        process.env.EXPO_PUBLIC_API_ENDPOINT_PRODUCTS
      }`,
    )
      .then((r) => r.json())
      .then((a) => setProducts(a));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={styles.fieldFind}
        placeholder="Recherche"
        placeholderTextColor={"grey"}
        value={search}
        onChangeText={(str)=>{
          setSearch(str)
        }}
      />
      <ScrollView>
        <ProductsListViewer products={products.filter((product)=>product.titre.toLowerCase().includes(search.toLowerCase()))} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fieldFind: {
    height: 40,
    fontSize: 28,
    borderWidth: 1,
    borderColor: "black",
  },
});
