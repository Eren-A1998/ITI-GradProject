import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        //source={item.imgUrl }
        //source="../../../assets/imgs/img1.jpg"
        style={styles.image}
      />
      {/* <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding:10,
    backgroundColor: 'white',
    //borderRadius: 20,
    width:'100%',
    //paddingBottom: 30,
    marginTop:20,
    //margin:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,

    //borderRadius:20,
    
  },
  image: {
    width: ITEM_WIDTH,
    height:220,
    borderRadius:20,
    //marginTop:25
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem