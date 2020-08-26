import React, { Component } from 'react';
import Carousel from 'react-native-anchor-carousel';



const carouselProducts= ({products}) => {

    renderItem = ({item, index}) => {
        const {backgroundColor} = item;
        return (
            <TouchableOpacity style={[styles.item, {backgroundColor}]}
                              onPress={() => {
                                  this._carousel.scrollToIndex(index);
                              }}>
                 .......
            </TouchableOpacity>)
    };

  return  (<View style={styles.carouselContainer}>
    <Carousel  style={styles.carousel}
               data={products}
               renderItem={this.renderItem}
               itemWidth={200}
               containerWidth={width - 20} 
               separatorWidth={0}
               ref={(c) => {
                   this._carousel = c;
               }}
               //pagingEnable={false}
               //minScrollDistance={20}
           />
</View>)

            
}

const styles = StyleSheet.create({ 
    
    carouselContainer: {
        height:200  
    },
        carousel: {
            flex:1
    } 
})