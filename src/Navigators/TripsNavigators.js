import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import tripsHistoryNavigator from '../Navigators/tripsHistoryNavigator';
import pendingTripsNavigator from '../Navigators/pendingTripsNavigator';

const Tab = createMaterialTopTabNavigator();

const TripsNavigators=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="tripsHistory" component={tripsHistoryNavigator} />
      <Tab.Screen name="pendingTrips" component={pendingTripsNavigator} />
    </Tab.Navigator>
  );
}

export default TripsNavigators;