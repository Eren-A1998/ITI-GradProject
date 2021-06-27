import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeNavigators from './HomeNavigators'
import ProfileNavigators from './ProfileNavigators'
import BookingNavigators from './BookingNavigators';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

const TabNavigators = () => {
    return (
        <Tab.Navigator initialRouteName="Home"  activeColor="#f0edf6" inactiveColor="#6B7D8B" labeled={false}  barStyle={{ backgroundColor: '#0041C2' }} >
            <Tab.Screen name="Home" component={HomeNavigators} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={28} />
                ),
            }} />
            <Tab.Screen name="Booking" component={BookingNavigators} options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="train" color={color} size={28} />
                ),
            }} />
            <Tab.Screen name="Profile" component={ProfileNavigators} options={{
                tabBarIcon: ({ color }) => (
                    <Ionicons name="person" color={color} size={28} />
                ),
            }} />
        </Tab.Navigator>
    );
}
export default TabNavigators;
