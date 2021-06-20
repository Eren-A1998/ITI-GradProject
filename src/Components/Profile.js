import React from 'react';

import { Button, View } from "native-base";
import { ScrollView, StyleSheet, Image, Text } from "react-native";

const Profile = (props) => {
  return (
    <ScrollView>
      <View style={styles.profileImgContainer}>
        <Image
          style={styles.profileImg}
          source={{ uri: "https://i.pinimg.com/originals/b2/82/b6/b282b6fc1eb5d8540c4e670bd95945c0.png" }}></Image>
      </View>

      <Text style={styles.name}>Jane Doe</Text>
      <Text style={styles.email}>Jane Doe@gmail.com</Text>

      <View  style={{alignSelf:'center',justifyContent:'center'}}>
        <Button style={styles.btn} onPress={() => {
          props.navigation.navigate('Edit')
        }}>
          <Text style={{ fontSize: 20 }}>Edit Profile</Text>
        </Button>


        <Button style={styles.btn} onPress={() => {
          props.navigation.navigate('TripsHistory')
        }}>
          <Text style={{ fontSize: 20 }}>Latest Trips</Text>
        </Button>

      </View>

    </ScrollView>
  );
};

export default Profile;


const styles = StyleSheet.create({
  profileImgContainer: {
    // height: 300,
    // width: 200,

    // display:"flex",
    //borderRadius: 40,
    // flexDirection: "column",
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImg: {
    height: 200,
    width: 200,
    borderRadius: 100,
    //alignSelf:"center"
  },
  name: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  },
  email: {
    marginTop: 10,
    fontSize: 20,
    textAlign: "center"
  },

  btn: {
    marginTop: 30,
    padding: 30,
    borderRadius: 20,
    backgroundColor: '#6aafd5',

    shadowColor: '#000',
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6
  },
});