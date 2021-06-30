import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RadioButton} from 'react-native-paper';
import registerStyle from '../Styles/register';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'
import {signUpNewUser} from '../Redux/actions/userActions';
import Validator from '../Utilities/inputValidation';
const Register = props => {
  const [userName, setUserName] = useState('');
  const [alert, setAlert] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('male');
  const [errorsMsg, setErrors] = useState({});

  const Open = () => {
    setAlert(true);
  }

  const handleClose = () => {
    setAlert(false);
  }
  let formValidation = (
    userName,
    email,
    password,
    confirmPassword,
    phoneNumber,
  ) => {
    let errors = {};
    let formIsValid = true;

    if (!Validator.requiredValidator(userName)) {
      formIsValid = false;
      errors['userName'] = '*Please enter your username';
    }

    if (!Validator.emailValidtaor(email)) {
      formIsValid = false;
      errors['email'] = '*Please enter valid email';
    }

    if (!Validator.passwordValidator(password)) {
      formIsValid = false;
      errors['password'] = '*Please enter valid password like as Test@1234....';
    }

    if (!Validator.confirmPasswordVlaidator(password, confirmPassword)) {
      formIsValid = false;
      errors['confiremPassword'] = '*Please enter the same password';
    }
    if (!Validator.phoneNumberValidtaor(phoneNumber)) {
      formIsValid = false;
      errors['phoneNumber'] = '*Please enter valid phone number';
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <SCLAlert
        theme="danger"
        show={alert}
        title="Failed"
        titleStyle={{ color: 'red' }}
        cancellable={false}
        subtitle={"Email Is Already Exist , Please Use Different Email"}
        onRequestClose={handleClose}>
        <SCLAlertButton theme="default" onPress={handleClose}>Close</SCLAlertButton>
      </SCLAlert>
      <View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View
            style={{
              borderRadius: 20,
              width: 130,
              marginHorizontal: 10,
              height: 1.2,
              marginTop: 5,
              backgroundColor: 'black',
              alignSelf: 'center',
            }}></View>
          <Text
            style={{
              marginHorizontal: 3,
              width: 110,
              fontSize: 25,
              fontFamily: 'serif',
              fontWeight: 'bold',
              color: '#214358',
              alignSelf: 'center',
            }}>
            Register
          </Text>
          <View
            style={{
              borderRadius: 20,
              width: 130,
              height: 1.2,
              marginTop: 5,
              backgroundColor: 'black',
              alignSelf: 'center',
            }}></View>
        </View>

        <View style={registerStyle.container}>
          <View style={{marginTop: 20}}>
            <Input
              placeholder="User Name"
              keyboardType="ascii-capable"
              leftIcon={<Icon name="user" style={registerStyle.iconStyle} />}
              onChangeText={value => setUserName(value)}
              errorMessage={errorsMsg.userName}
            />

            <Input
              keyboardType="email-address"
              placeholder="Email"
              errorMessage={errorsMsg.email}
              leftIcon={
                <Icon name="envelope" style={registerStyle.iconStyle} />
              }
              onChangeText={value => setEmail(value)}
            />
            <Input
              secureTextEntry={true}
              placeholder="Password"
              leftIcon={<Icon name="lock" style={registerStyle.iconStyle} />}
              onChangeText={value => setPassword(value)}
              errorMessage={errorsMsg.password}
            />
            <Input
              secureTextEntry={true}
              placeholder="Confirm Password"
              leftIcon={<Icon name="lock" style={registerStyle.iconStyle} />}
              onChangeText={value => setConfirmPassword(value)}
              errorMessage={errorsMsg.confiremPassword}
            />
            <Input
              keyboardType="phone-pad"
              placeholder="Phone Number"
              leftIcon={<Icon name="phone" style={registerStyle.iconStyle} />}
              onChangeText={value => setPhoneNumber(value)}
              errorMessage={errorsMsg.phoneNumber}
            />
          </View>

          <View style={registerStyle.genderContainer}>
            <RadioButton
              color="#2596be"
              value="male"
              status={gender === 'male' ? 'checked' : 'unchecked'}
              onPress={() => setGender('male')}
            />
            <Text style={{marginEnd: 20}}>Male</Text>
            {/* <Icon name="mars" style={registerStyle.iconStyle} /> */}
            <RadioButton
              value="female"
              color="#2596be"
              status={gender === 'female' ? 'checked' : 'unchecked'}
              onPress={() => setGender('female')}
            />

            <Text>Female</Text>
            {/* <Icon name="venus" style={registerStyle.iconStyle} /> */}
          </View>
          <View style={{marginBottom: 10}}>
            <Button
              buttonStyle={Styles.Pay}
              title="Sign Up"
              onPress={async () => {
             let x =    formValidation(
                  userName,
                  email,
                  password,
                  confirmPassword,
                  phoneNumber,
                  gender,
                )
                if (x) {
                  let res = await props.signUpNewUser(userName,email,password,phoneNumber,gender);

                  if (res.payload==null) Open()
                  else 
                  await props.navigation.replace('editProfile');
                } 
              }}></Button>
          </View>
          <View style={{marginBottom: 15, marginTop: 10, alignSelf: 'center'}}>
            <Text style={{marginHorizontal: 60, color: 'black'}}>
              already have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.replace('Login');
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  alignSelf: 'center',
                  color: '#2E8BC0',
                }}>
                sign In
              </Text>
            </TouchableOpacity>
          </View>

          {/* 
        <View style={{marginBottom: 25}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            <Text style={{textAlign: 'center', color: 'gray'}}>
              already have an account ? sign In
            </Text>
          </TouchableOpacity>
        </View> */}
          {/* <TouchableOpacity
          style={registerStyle.submitBtn}
          >
          <Text style={registerStyle.textBtn}></Text>
        </TouchableOpacity> */}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const Styles = StyleSheet.create({
  Pay: {
    backgroundColor: '#0074B7',
    alignSelf: 'center',
    borderRadius: 50,
    width: '30%',
  },
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({signUpNewUser}, dispatch);
};
export default connect(null, mapDispatchToProps)(Register);
