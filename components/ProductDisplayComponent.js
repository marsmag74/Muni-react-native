import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import PropTypes from 'prop-types';

class ProductDisplay extends Component {

static propTypes = {
    product: PropTypes.object.isRequired,
}

 render(){
     const { product } = this.props;
  return (
    <View style={styles.listProduct}>
      <Card
        key={product.id}
        image={{ uri: product.image }}
        containerStyle={{ margin: 5, borderTopWidth: 0, borderRadius: 5 }}
      >
        <Text>{product.title}</Text>
        <Text>{product.priceStart}</Text>
      </Card>
    </View>
  );
}
}

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

export default ProductDisplay;
