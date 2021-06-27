import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import registerStyle from '../Styles/register';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signUpNewUser} from '../Redux/actions/userActions';
import Validator from '../Utilities/inputValidation';

const Register = props => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('male');

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
          />
          <Input
            style={registerStyle.inputStyle}
            keyboardType="email-address"
            placeholder="Email"
            leftIcon={<Icon name="envelope" style={registerStyle.iconStyle} />}
            onChangeText={value => setEmail(value)}
          />
          <Input
            style={registerStyle.inputStyle}
            secureTextEntry={true}
            placeholder="Password"
            leftIcon={<Icon name="lock" style={registerStyle.iconStyle} />}
            onChangeText={value => setPassword(value)}
          />
          <Input
            style={registerStyle.inputStyle}
            secureTextEntry={true}
            placeholder="Confirm Password"
            leftIcon={<Icon name="lock" style={registerStyle.iconStyle} />}
            onChangeText={value => setConfirmPassword(value)}
          />
          <Input
            style={registerStyle.inputStyle}
            keyboardType="phone-pad"
            placeholder="Phone Number"
            leftIcon={<Icon name="phone" style={registerStyle.iconStyle} />}
            onChangeText={value => setPhoneNumber(value)}
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
          onPress={() => {
            if (
              Validator.formValidation(
                userName,
                email,
                password,
                confirmPassword,
                phoneNumber,
              )
            ) {
              props.signUpNewUser(
                userName,
                email,
                password,
                confirmPassword,
                phoneNumber,
                gender,
              );
              props.navigation.replace('TabNav');
            } else {
              alert('Error');
            }
          }}>
          <Text style={registerStyle.textBtn}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({signUpNewUser}, dispatch);
};
export default connect(null, mapDispatchToProps)(Register);

