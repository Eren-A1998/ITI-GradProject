import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {RadioButton} from 'react-native-paper';
import registerStyle from '../Styles/register';
import FirebaseUtilities from '../Utilities/firebaseAuth';
import Validator from '../Utilities/inputValidation';
import userOperation from './../Utilities/firebaseDatabase';

const Register = props => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('male');
  const [errorMsg, setErrorMsg] = useState(null);
  const [errorUserName, setErrorUserName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorConfirmePassword, setErrorConfirmePassword] = useState(null);
  const [errorPhone, setErrorPhone] = useState(null);
  let signUp = (
    name,
    emailValue,
    passwordValue,
    passwordConValue,
    phone,
    genderflag,
  ) => {
    //console.log(userName);
    console.log('pressed', emailValue, passwordValue, userName);
    FirebaseUtilities.signUp(emailValue, passwordValue)
      .then(() => {
        console.log('user Created', userName);
        let id = FirebaseUtilities.getUserId(() => {
          props.navigation.navigate('imageUploader');
        });
        console.log('id->', id);
        userOperation
          .createNewUser(id, name, emailValue, passwordValue, phone, gender)
          .then(() => {
            console.log('User added');
          })
          .catch(e => {
            console.log('store data reg', e);
          });
      })
      .catch(e => {
        console.log('Sign up', e);
      });
    console.log(props);
    //imageUploader
  };
  let validate = (value, type) => {
    if (type === 'userName') {
      if (!Validator.requiredValidator(value)) {
        setErrorMsg(null);
        setErrorUserName(false);
      } else {
        setErrorUserName(true);
        setErrorMsg('Please Enter Valid userName');
      }
    } else if (type === 'email') {
      if (
        !Validator.requiredValidator(value) &&
        Validator.emailValidtaor(value)
      ) {
        setErrorMsg(null);
        setErrorEmail(false);
      } else {
        setErrorEmail(true);
        setErrorMsg('Please Enter Valid mail');
      }
    } else if (type === 'password') {
      if (
        !Validator.requiredValidator(value) &&
        Validator.passwordValidator(value)
      ) {
        setErrorPassword(false);
      } else {
        setErrorPassword(true);
        setErrorMsg(
          'password must contain at least Capital character, spicial charachter like @ and 8 character',
        );
      }
    } else if (type === 'confirmPassword') {
      if (
        !Validator.requiredValidator(value) &&
        Validator.confirmPasswordVlaidator(value)
      ) {
        setErrorConfirmePassword(false);
      } else {
        setErrorConfirmePassword(true);
        setErrorMsg('Please Enter identical password');
      }
    } else if (type === 'phoneNumber') {
      if (
        !Validator.requiredValidator(value) &&
        Validator.phoneNumberValidtaor(value)
      ) {
        setErrorPhone(false);
      } else {
        setErrorPhone('Please Enter Valid phone number');
      }
    }
  };

  return (
    <ScrollView>
      <View style={registerStyle.container}>
        <View style={{marginTop: 20}}>
          <Input
            placeholder="User Name"
            keyboardType="ascii-capable"
            style={registerStyle.inputStyle}
            leftIcon={<Icon name="user" style={registerStyle.iconStyle} />}
            onChangeText={value => setUserName(value)}
            onEndEditing={value => validate(value, 'userName')}
            errorMessage={errorUserName ? errorMsg : null}
          />
          <Input
            style={registerStyle.inputStyle}
            keyboardType="email-address"
            placeholder="Email"
            leftIcon={<Icon name="envelope" style={registerStyle.iconStyle} />}
            onChangeText={value => setEmail(value)}
            onEndEditing={value => validate(value, 'email')}
            errorMessage={errorEmail ? errorMsg : null}
          />
          <Input
            style={registerStyle.inputStyle}
            secureTextEntry={true}
            placeholder="Password"
            leftIcon={<Icon name="lock" style={registerStyle.iconStyle} />}
            onChangeText={value => setPassword(value)}
            onEndEditing={value => validate(value, 'password')}
            errorMessage={errorPassword ? errorMsg : null}
          />
          <Input
            style={registerStyle.inputStyle}
            secureTextEntry={true}
            placeholder="Confirm Password"
            leftIcon={<Icon name="lock" style={registerStyle.iconStyle} />}
            onChangeText={value => setConfirmPassword(value)}
            onEndEditing={value => validate(value, 'confirmPassword')}
            errorMessage={errorConfirmePassword ? errorMsg : null}
          />
          <Input
            style={registerStyle.inputStyle}
            keyboardType="phone-pad"
            placeholder="Phone Number"
            leftIcon={<Icon name="phone" style={registerStyle.iconStyle} />}
            onChangeText={value => setPhoneNumber(value)}
            onEndEditing={value => validate(value, 'phoneNumber')}
            errorMessage={errorPhone ? errorMsg : null}
          />
        </View>

        <View style={registerStyle.genderContainer}>
          <RadioButton
            color="#2596be"
            value="male"
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('male')}
          />
          <Text>Male</Text>
          <Icon name="mars" style={registerStyle.iconStyle} />
          <RadioButton
            value="female"
            color="#2596be"
            status={gender === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setGender('female')}
          />

          <Text>Female</Text>
          <Icon name="venus" style={registerStyle.iconStyle} />
        </View>

        <TouchableOpacity
          style={registerStyle.submitBtn}
          onPress={() =>
            signUp(
              userName,
              email,
              password,
              confirmPassword,
              phoneNumber,
              gender,
            )
          }>
          <Text style={registerStyle.textBtn}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;
