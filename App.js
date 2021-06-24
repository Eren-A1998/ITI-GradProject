import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from './src/Components/OnBoardring';
import Register from './src/Components/Register';
import TabNavigators from './src/Navigators/TabNavigators';
import PromiseMW from 'redux-promise';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import RootReducer from './src/Redux/reducers/index';
import UploadScreen from './src/Components/ImageUploader';
import Login from './src/Components/Login';
import Home from './src/Components/Home';
import EditProfile from './src/Components/EditProfile';

const Stack = createStackNavigator();
const createStoreWithMW = applyMiddleware(PromiseMW)(createStore);

const App = () => {
  return (
    <Provider store={createStoreWithMW(RootReducer)}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="onBoarding" component={OnBoarding} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="imageUploader" component={UploadScreen} />
          <Stack.Screen name="TabNav" component={TabNavigators} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="editProfile" component={EditProfile} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
