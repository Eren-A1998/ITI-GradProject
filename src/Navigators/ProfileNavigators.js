import React from 'react';
import Profile from '../Components/Profile';
import TripsNavigators from './TripsNavigators';
import EditProfile from '../Components/EditProfile';
import {createStackNavigator} from '@react-navigation/stack';
import {logOut,clearUser} from '../Redux/actions/userActions';
import {bindActionCreators} from 'redux';
import {Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { TouchableWithoutFeedback, View } from 'react-native';
import Iconb from 'react-native-vector-icons/Ionicons';
import { CommonActions } from '@react-navigation/native';

const Stack = createStackNavigator();
const ProfileNavigators = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft:null,
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
        
          headerRight: () => (
            <Icon.Button
              name="logout"
              size={25}
              color="#F87431"
              backgroundColor="#ffffff"
              onPress={async () => {
                await props.logOut();
                props.clearUser();
                await  props.navigation.replace('Login');
              }}></Icon.Button>
          ),
        }}
      />
      <Stack.Screen name="TripsHistory" component={TripsNavigators} />
      <Stack.Screen name="editProfile" component={EditProfile} options={{
        headerShown:false
       
      }}/>
    </Stack.Navigator>
  );
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({logOut,clearUser}, dispatch);
};


export default connect(null,mapDispatchToProps)(ProfileNavigators);
