import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Banner from "../components/ui/Banner/Banner";
import ProductsSearcher from "../components/functionnals/ProductsSearcher/ProductsSearcher.connected";
import ProductsListViewer from "../components/ui/ProductsListViewer/ProductsListViewer.connected";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const Store = (props: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <ProductsSearcher />
      <ScrollView>
        <ProductsListViewer />
      </ScrollView>
    </View>
  );
};

export default Store;
