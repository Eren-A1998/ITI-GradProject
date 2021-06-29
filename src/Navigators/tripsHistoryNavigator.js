import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UpcomingTrips from '../Components/TripsHistory';
import QR from '../Components/generatorQR';
import info from './../Components/info';

const Stack = createStackNavigator();
const tripsHistoryNavigator = ()=>{
    return(
    <Stack.Navigator>
        <Stack.Screen name="tripsHistory" component={UpcomingTrips} options={{ 
            headerShown: false,
        }}/>
        <Stack.Screen name="QR" component={QR} options={{ 
            headerShown: false,
        }}/>
        <Stack.Screen name="info" component={info}options={{ 
            headerShown: false,
        }}/>
    </Stack.Navigator>
    );
}

export default tripsHistoryNavigator;