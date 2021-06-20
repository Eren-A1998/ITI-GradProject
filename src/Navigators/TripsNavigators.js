import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UpcomingTrips from '../Components/UpcomingTrips';
import PreviousTrips from '../Components/PreviousTrips';
const Tab = createMaterialTopTabNavigator();

const TripsNavigators=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="UpcomingTrips" component={UpcomingTrips} />
      <Tab.Screen name="PreviousTrips" component={PreviousTrips} />
    </Tab.Navigator>
  );
}

export default TripsNavigators;