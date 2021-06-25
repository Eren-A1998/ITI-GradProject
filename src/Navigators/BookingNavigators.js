import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Booking from '../Components/Booking';
import ReservationDetails from '../Components/ReservationDetails';
import PayPage from '../Components/PayPage';

const Stack = createStackNavigator();
const BookingNavigators = ()=>{
    return(
    <Stack.Navigator>
        <Stack.Screen name="Booking" component={Booking}/>
        { <Stack.Screen name="ReservationDetails" component={ReservationDetails}/>}
        <Stack.Screen name="Pay" component={PayPage}/>

    </Stack.Navigator>
    )
}

export default BookingNavigators;