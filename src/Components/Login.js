import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, SocialIcon} from 'react-native-elements';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import registerStyle from '../Styles/register';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  signInUser,
  facebookSignIn,
  googleSignIn,
} from '../Redux/actions/userActions';
import {Button} from 'react-native-elements';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'


const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);
  const Open = () => {
    setAlert(true);
  }

  const handleClose = () => {
    setAlert(false);
  }

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <SCLAlert
        theme="danger"
        show={alert}
        title="Failed"
        titleStyle={{ color: 'red' }}
        cancellable={false}
        subtitle={"Email Or Password is Invaild"}
        onRequestClose={handleClose}>
        <SCLAlertButton theme="default" onPress={handleClose}>Close</SCLAlertButton>
      </SCLAlert>
      
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <View style={{marginTop: 20}}>
          <View>
            <Image
              style={{alignSelf: 'center', width: '40%', height: 120}}
              source={require('../../assets/metro.png')}></Image>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#214358',
                fontFamily: 'serif',
                fontSize: 20,
                alignSelf: 'center',
                marginVertical: 15,
              }}>
              Welcome to metro reservation
            </Text>
          </View>
          <View style={{backgroundColor: '#E3E8E9', borderRadius: 20}}>
            <View
              style={{
                marginVertical: 10,
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
              <SocialIcon
                button
                style={{height: 50, width: 50, alignSelf: 'center'}}
                type="facebook"
                onPress={() => facebookSignIn()}
              />
              <SocialIcon
                button
                style={{height: 50, width: 50, alignSelf: 'center'}}
                type="google"
                onPress={() => googleSignIn()}
              />
            </View>
            {/* <Text style={{alignSelf:'center' , fontWeight:'bold' , }}>OR</Text> */}

            <Input
              style={registerStyle.inputStyle}
              keyboardType="email-address"
              placeholder="Email"
              leftIcon={
                <Icon name="envelope" style={registerStyle.iconStyle} />
              }
              onChangeText={value => setEmail(value)}
            />
            <Input
              style={registerStyle.inputStyle}
              secureTextEntry={true}
              placeholder="Password"
              leftIcon={<Icon name="lock" style={registerStyle.iconStyle} />}
              onChangeText={value => setPassword(value)}
            />

            <Button
              buttonStyle={styles.Pay}
              title="Sign in"
              onPress={async () => {
              let res =   await props.signInUser(email, password);
              if(res.payload==null){
                Open()
              }else{
                await props.navigation.replace('TabNav');
              }
              }}></Button>
          </View>
        </View>
        <View style={{marginVertical: 20}}>
          <Text style={{marginHorizontal: 60, color: 'black'}}>
            Don't have an account yet?
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.replace('Register');
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                alignSelf: 'center',
                color: '#2E8BC0',
              }}>
              sign up now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  Pay: {
    backgroundColor: '#0074B7',
    alignSelf: 'center',
    borderRadius: 50,
    marginVertical: 10,
    width: '30%',
  },
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({signInUser}, dispatch);
};

export default connect(null, mapDispatchToProps)(Login);
