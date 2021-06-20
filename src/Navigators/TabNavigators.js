import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Booking from '../Components/Booking'
 import HomeNavigators from './HomeNavigators'
 import ProfileNavigators from './ProfileNavigators'

const Tab = createMaterialBottomTabNavigator();

const TabNavigators = ()=> {
    return(
         <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeNavigators}/>
          <Tab.Screen name="Booking" component={Booking}/> 
          <Tab.Screen name="Profile" component={ProfileNavigators}/> 
        </Tab.Navigator>
    );
}
export default TabNavigators;
