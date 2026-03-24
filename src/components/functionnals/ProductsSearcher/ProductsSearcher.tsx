import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import { IProduct } from "../../../interfaces/IProducts";
import { styles } from "./ProductsSearcher.styles";
import ProductsListViewer from "../../ui/ProductsListViewer/ProductsListViewer";

interface IProductsSearcherProps {
  products: Array<IProduct>;
}

const ProductsSearcher = ({ products }: IProductsSearcherProps) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <TextInput
        style={styles.fieldFind}
        placeholder="Recherche"
        placeholderTextColor={"grey"}
        value={search}
        onChangeText={(str) => {
          setSearch(str);
        }}
      />
      <ScrollView>
        <ProductsListViewer
          products={products.filter((product) =>
            product.titre.toLowerCase().includes(search.toLowerCase()),
          )}
        />
      </ScrollView>
    </>
  );
};

export default ProductsSearcher;
