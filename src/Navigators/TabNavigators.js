import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
 import HomeNavigators from './HomeNavigators'
 import ProfileNavigators from './ProfileNavigators'
import BookingNavigators from './BookingNavigators';

const Tab = createMaterialBottomTabNavigator();

const TabNavigators = ()=> {
    return(
         <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeNavigators}/>
          <Tab.Screen name="BookingNavigate" component={BookingNavigators}/> 
          <Tab.Screen name="Profile" component={ProfileNavigators}/> 
        </Tab.Navigator>
    );
}
export default TabNavigators;
