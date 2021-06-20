import React from 'react';
import Booking from '../Components/Booking';
import Home from '../Components/Home';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const HomeNavigators = ()=>{
    return(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ 
            headerShown: false ,
            // tabBarLabel: 'Home',
            // tabBarIcon: ({focused,size}) => (
            //   <Image
            //     source={
            //       focused
            //         ? require('../../assets/navIcons/homeActive.jpg')
            //         : require('../../assets/navIcons/homeInactive.png')
            //     }
            //     style={{
            //       width: size,
            //       height: size,
            //       borderRadius: size,
            //     }}
            //   />
            // ),
        }}/>
        <Stack.Screen name="Booking" component={Booking}/>
    </Stack.Navigator>
    );
}

export default HomeNavigators;