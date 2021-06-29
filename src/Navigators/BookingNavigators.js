import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Booking from '../Components/Booking';
import ReservationDetails from '../Components/ReservationDetails';
import PayProvider from '../Components/PayProvider';
import TripsNavigators from './TripsNavigators';
import HomeNavigators from './HomeNavigators';
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'
const Stack = createStackNavigator();
const BookingNavigators = (props) => {
const [Show, setShow] = useState(false);
const [Show1, setShow1] = useState(false);
const handleOpen = () => {
  setShow(true);
}

const handleClose = () => {
  setShow(false);
}

const handleOpen1 = () => {
  setShow1(true);
}

const handleClose1 = () => {
  setShow1(false);
}

  return (
    <Stack.Navigator>
      <Stack.Screen name="Booking" component={Booking} options={{
        headerLeft: () => (
          <TouchableWithoutFeedback
            onPress={() => props.navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              })
            )}>
            <Icon name="arrow-back" size={30} color="#000" style={{ marginLeft: 12, marginTop: 2 }} />
          </TouchableWithoutFeedback>)
      }} />

      <Stack.Screen name="ReservationDetails" component={ReservationDetails} options={{
        headerLeft: () => (
          <TouchableWithoutFeedback
            onPress={() => {
              handleOpen1()
            }} >
            <View>
              <SCLAlert
                theme="warning"
                show={Show1}
                title="Warning"
                titleStyle={{ color: 'brown' }}
                cancellable={false}
                subtitle="You should pay in  3 days or this ticket will be expire"
                onRequestClose={handleClose1}
              >
                <SCLAlertButton theme="warning" onPress={() => {
                  props.navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{ name: 'Home' }]
                    }))
                }}
                >Confirm</SCLAlertButton>
                <SCLAlertButton theme="inverse" onPress={handleClose1}>Cancel</SCLAlertButton>
              </SCLAlert>
              <Icon name="arrow-back" size={30} color="#000" style={{ marginLeft: 12, marginTop: 2 }} />
            </View>
          </TouchableWithoutFeedback>
        )
      }} />

      <Stack.Screen name="Pay" component={PayProvider}
     /*  options={{
        headerLeft: () => (
          <TouchableWithoutFeedback
            onPress={() => {
              handleOpen()
            }} >
            <View>
              <SCLAlert
                theme="warning"
                show={Show}
                title="Warning"
                titleStyle={{ color: 'brown' }}
                cancellable={false}
                subtitle="You should pay in  3 days or this ticket will be expire"
                onRequestClose={handleClose}
              >
                <SCLAlertButton theme="warning" onPress={() => {
                  props.navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{ name: 'ReservationDetails' }]
                    }))
                }}
                >Confirm</SCLAlertButton>
                <SCLAlertButton theme="inverse" onPress={handleClose}>Cancel</SCLAlertButton>
              </SCLAlert>
              <Icon name="arrow-back" size={30} color="#000" style={{ marginLeft: 12, marginTop: 2 }} />
            </View>
          </TouchableWithoutFeedback>
        )
      }}*/
       />

      <Stack.Screen name="TripsHistory" component={TripsNavigators} options={{
        headerLeft: () => (
          <TouchableWithoutFeedback
            onPress={() => props.navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              })
            )}>
            <Icon name="arrow-back" size={30} color="#000" style={{ marginLeft: 12, marginTop: 2 }} />
          </TouchableWithoutFeedback>
        )
      }} />

      <Stack.Screen name="Home" component={HomeNavigators} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default BookingNavigators;