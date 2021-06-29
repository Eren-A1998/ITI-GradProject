import React from 'react';
import Profile from '../Components/Profile'
import TripsNavigators from './TripsNavigators';
import EditProfile from '../Components/EditProfile'
import { createStackNavigator } from '@react-navigation/stack';
import FirebaseUtilities from '../Utilities/firebaseAuth';
import { Button } from 'native-base';
import { Text } from 'react-native';

const Stack = createStackNavigator();
const ProfileNavigators = (props)=>{
    return(
    <Stack.Navigator>
        <Stack.Screen name="Profile"  component={Profile} 
        options={{
            headerStyle:{
                backgroundColor:'#0041C2',
                //color:'white'
                
            },
            headerTintColor:'white',
            
            headerRight:() => (
                <Button
                style={{height:35 ,backgroundColor:"#F87431",marginRight:6,paddingHorizontal:20,borderRadius:15}}
                  onPress={
                    async ()=>{
                        await FirebaseUtilities.signOut();
                        props.navigation.replace("Login")
                         
                    }
                  }
                >
                    <Text style={{color:'white',fontSize:16}}>SignOut</Text>
                </Button>
              ),
        }}
        />
        <Stack.Screen name="TripsHistory" component={TripsNavigators}/>
        <Stack.Screen name="Edit" component={EditProfile}/>
    </Stack.Navigator>
    )
}

export default ProfileNavigators;
