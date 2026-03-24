import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IProduct } from "../interfaces/IProducts";

interface IProductViewerProps {
  product: IProduct;
}

const ProductViewer = ({ product }: IProductViewerProps) => {
  return (
    <View style={styles.ProductViewer}>
      <Text style={styles.titre}>ProductViewer</Text>
      <View style={styles.colsFlex}>
        <View style={styles.colLeft}>
            <Text style={styles.stock}>stock:</Text>
            <Text style={styles.descriptionLabel}>Description :</Text>
            <Text style={styles.description}></Text>
            <Text style={styles.prix}>Prix:</Text>
        </View>
        <View style={styles.colRight}></View>
      </View>
    </View>
  );
};

export default ProductViewer;

const styles = StyleSheet.create({
  ProductViewer: {},
  titre: {},
  colsFlex: {},
  colLeft: {},
  colRight: {},
});
