import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import pendingTrips from '../Components/pendingTrips';
import PayProvider from '../Components/PayProvider';
import info from './../Components/info';

const Stack = createStackNavigator();
const tripsHistoryNavigator = ()=>{
    return(
    <Stack.Navigator>
        <Stack.Screen name="pendingTrips" component={pendingTrips} options={{ 
            headerShown: false,
        }}/>
        <Stack.Screen name="Pay" component={PayProvider} options={{ 
            headerShown: false,
        }}/>
        <Stack.Screen name="info" component={info} options={{ 
            headerShown: false,
        }}/>
    </Stack.Navigator>
    );
}

export default tripsHistoryNavigator;