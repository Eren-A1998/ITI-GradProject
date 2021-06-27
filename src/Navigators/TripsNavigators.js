import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UpcomingTrips from '../Components/TripsHistory';
import pindingTrips from '../Components/pendingTrips';
const Tab = createMaterialTopTabNavigator();

const TripsNavigators=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="tripsHistory" component={UpcomingTrips} />
      <Tab.Screen name="pendingTrips" component={pindingTrips} />
    </Tab.Navigator>
  );
}

export default TripsNavigators;