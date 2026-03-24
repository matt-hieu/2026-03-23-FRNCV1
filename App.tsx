import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { IProduct } from "./src/interfaces/IProducts";
import ProductsListViewer from "./src/components/ui/ProductsListViewer/ProductsListViewer.connected";
import ProductsSearcher from "./src/components/functionnals/ProductsSearcher/ProductsSearcher";
import Banner from "./src/components/ui/Banner/Banner";
import {store} from './src/store/store'
import { Provider } from "react-redux";
export default function App() {
  console.log(store);
  const [search, setSearch] = useState("");
  const [selectedProduct, setselectedProduct] = useState<undefined|IProduct>(undefined)
  return (
    <Provider store={store}>
      <View style={{ flex: 1, }}>
        <Banner/>
        {/* <ProductsSearcher
          products={products}
          searchField={search}
          onSearchChange={(str) => {
            setSearch(str);
          }}
        /> */}
        <ScrollView>
          <ProductsListViewer/>
        </ScrollView>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({});
