import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ProductDisplay from "./ProductDisplayComponent";

const numColumns = 2;

function BreadProducts({ products }) {
  return (
    <FlatList
      data={products.filter((product) => product.categories === "bread")}
      renderItem={({ item }) => <ProductDisplay product={item} />}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
      numColumns={numColumns}
    />
  );
}

export default BreadProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  listProduct: {
    flex: 1,
    maxWidth: "50%",
    borderRadius: 4,
    textAlign: "right",
  },
});