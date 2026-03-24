import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IProduct } from "../interfaces/IProducts";

interface IProductViewerProps {
  product: IProduct;
}

const ProductViewer = ({ product }: IProductViewerProps) => {
  return (
    <View style={styles.ProductViewer}>
      <Text style={[styles.titre,styles.bold]}>{product.titre}</Text>
      <View style={styles.colsFlex}>
        <View style={styles.colLeft}>
          <Text style={styles.stock}>stock:{product.stock}</Text>
          <Text style={styles.descriptionLabel}>Description :</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.prix}>Prix:{product.prix}</Text>
        </View>
        <View style={styles.colRight}>
          <Button title="Edition" />
        </View>
      </View>
    </View>
  );
};

export default ProductViewer;

const styles = StyleSheet.create({
  ProductViewer: {
    borderColor: "grey",
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titre: {
    textAlign: "center",
    fontSize: 20,
    textDecorationLine: "underline",
  },
  colsFlex: {
    flexDirection:'row',
    gap:5
  },
  colLeft: {},
  colRight: {
    justifyContent:'center'
  },
  stock: {},
  descriptionLabel: {},
  description: {},
  prix: {},
  bold:{fontWeight:900}
});
