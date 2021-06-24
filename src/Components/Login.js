import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, SocialIcon} from 'react-native-elements';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import registerStyle from '../Styles/register';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  signInUser,
  facebookSignIn,
  googleSignIn,
} from '../Redux/actions/userActions';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView>
      <View style={registerStyle.container}>
        <View style={{marginTop: 20}}>
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
        </View>

        <TouchableOpacity
          style={registerStyle.submitBtn}
          onPress={() => props.signInUser(email, password)}>
          <Text style={registerStyle.textBtn}>Sign In</Text>
        </TouchableOpacity>

        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          onPress={() => facebookSignIn()}
        />
        <SocialIcon
          title="Sign In With Google"
          button
          type="google"
          onPress={() => googleSignIn()}
        />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Register');
          }}>
          <Text style={{marginHorizontal: 60, color: 'gray'}}>
            Don't have an account yet?sign up now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({signInUser}, dispatch);
};

export default connect(null, mapDispatchToProps)(Login);
