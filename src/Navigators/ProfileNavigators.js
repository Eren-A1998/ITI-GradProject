import React from 'react';
import Profile from '../Components/Profile'
import TripsNavigators from './TripsNavigators';
import EditProfile from '../Components/EditProfile'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const ProfileNavigators = ()=>{
    return(
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="TripsHistory" component={TripsNavigators}/>
        <Stack.Screen name="Edit" component={EditProfile}/>
    </Stack.Navigator>
    )
}

export default ProfileNavigators;