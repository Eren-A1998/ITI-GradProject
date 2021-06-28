import React from 'react';
import { Button, View } from "native-base";
import { ScrollView, StyleSheet, Image, Text } from "react-native";

const Profile = (props) => {
  return (
    <ScrollView>
      <View >
        <View style={styles.profileImgContainer}>
          <Image
            style={styles.profileImg}
            source={{ uri: "https://i.pinimg.com/originals/b2/82/b6/b282b6fc1eb5d8540c4e670bd95945c0.png" }}></Image>
        </View>

        <Text style={styles.name}>Jane Doe</Text>
        <Text style={styles.email}>Jane Doe@gmail.com</Text>
      </View>

      <View style={styles.btn_container}>
        <Button style={styles.btn} onPress={() => {
          props.navigation.navigate('Edit')
        }}>
          <Text style={{ color: 'white', fontSize: 20 ,fontWeight:"bold"}}>Edit Profile</Text>
        </Button>

        <Button style={styles.btn} onPress={() => {
          props.navigation.navigate('TripsHistory')
        }}>
          <Text style={{ color: 'white', fontSize: 20 ,fontWeight:"bold"}}>Latest Trips</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default Profile;


const styles = StyleSheet.create({
  Content:
  {
    backgroundColor: "#0041C2", 
    paddingBottom: 50, 
    borderBottomEndRadius: 50, 
    borderBottomStartRadius: 50,
    marginTop:8,
  },
  profileImgContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImg: {
    height: 170,
    width: 170,
    borderRadius: 100,
    //alignSelf:"center"
  },
  name: {
    //color: "white",
    color:'black',
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  },
  email: {
    //color: "white",
    color:'black',
    marginTop: 5,
    fontSize: 18,
    textAlign: "center"
  },

  btn_container: {
    display: 'flex',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 20,
    marginTop: 40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70
  },

  btn: {
    marginTop: 30,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#F87431',
    alignSelf: 'center',
    width: "50%",
    shadowColor: '#000',
    shadowOffset: { width: 100, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6,
    justifyContent: 'center'
  },
});