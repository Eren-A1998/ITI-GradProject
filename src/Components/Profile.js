import React from 'react';
import { Button, View } from "native-base";
import { ScrollView, StyleSheet, Image, Text } from "react-native";
import { connect, useSelector } from 'react-redux';

const Profile = (props) => {
 const {currentuser} = props;
  const{userImage} = props;
  console.log("profile",currentuser)
  let malePhoto = 'https://appvital.com/images/profile/file-uploader-api-profile-avatar-2.jpg';
  let femalePhoto = 'https://www.independencebigs.org/wp-content/uploads/2018/08/bio-thumb-female-default.png';

  let img = currentuser.image==undefined?userImage==undefined?currentuser.gender=='female'?femalePhoto:malePhoto:userImage.userImage:currentuser.image;
  return (
    <View>
      <View style={styles.Content}>
        <View style={styles.profileImgContainer}>
          <Image
            style={styles.profileImg}
            source={{ uri: img }}></Image>
        </View>

        <Text style={styles.name}>{currentuser.userName}</Text>
        <Text style={styles.email}>{currentuser.email}</Text>
      </View>

      <View style={styles.btn_container}>
        <Button style={styles.btn} onPress={() => {
          props.navigation.navigate('Edit')
        }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Edit Profile</Text>
        </Button>

        <Button style={styles.btn} onPress={() => {
          props.navigation.navigate('TripsHistory')
        }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Latest Trips</Text>
        </Button>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentuser:state.UserReducer.currentUser,
    userImage: state.UserReducer.uploadphoto
  }
}


export default  connect(mapStateToProps,null)( Profile);


const styles = StyleSheet.create({
  Content:
  {
    backgroundColor: "#145DA0", 
    paddingBottom: 50, 
    borderBottomEndRadius: 50, 
    borderBottomStartRadius: 50,
  },
  profileImgContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  name: {
    color: "white",
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  },
  email: {
    color: "white",
    marginTop: 5,
    fontSize: 18,
    textAlign: "center"
  },

  btn_container: {
    display: 'flex',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 20,
    marginTop: 10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70
  },

  btn: {
    marginTop: 30,
    padding: 30,
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