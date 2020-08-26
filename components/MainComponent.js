import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { PRODUCTS } from "../shared/products";
import FeaturedProducts from "./FeaturedComponents";
import BakeryProducts from "./BakeryComponent";
import BreadProducts from "./BreadComponent";
import JamsProducts from "./JamsComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <JamsProducts
          products={this.state.products}
          style={styles.listContainer}
        />
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  listContainer: {
    textAlign: "right",
  },
});
