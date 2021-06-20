import React from 'react';
import {View,Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const Booking = () => {
  return (
    <View>
      {/* <Button title="Book" onPress={()=>{
      props.navigation.navigate('Booking')
    }}></Button> */}
      <Button title="logout" onPress={() => {
        auth()
          .createUserWithEmailAndPassword('marwanbambo@hh.hh', '12345678')
          .then(() => {
            console.log('User account created & signed in!');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }

            console.error(error);
          });
      }}></Button>
    </View>
  );
};

export default Booking;
