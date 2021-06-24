import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, SocialIcon} from 'react-native-elements';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import registerStyle from '../Styles/register';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editUserProfile} from '../Redux/actions/userActions';
const EditProfile = props => {
  const [userName, setUserName] = useState(null);
  const [image, setImage] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  return (
    <ScrollView>
      <View style={registerStyle.container}>
        <View style={{marginTop: 20}}>
          <Input
            style={registerStyle.inputStyle}
            keyboardType="ascii-capable"
            placeholder="User Name"
            leftIcon={<Icon name="user" style={registerStyle.iconStyle} />}
            onChangeText={value => setUserName(value)}
          />
          <Input
            style={registerStyle.inputStyle}
            keyboardType="phone-pad"
            placeholder="Phone Number"
            leftIcon={<Icon name="phone" style={registerStyle.iconStyle} />}
            onChangeText={value => setPhoneNumber(value)}
          />
        </View>

        <TouchableOpacity
          style={registerStyle.submitBtn}
          onPress={() => {
            console.log('pressed', userName, phoneNumber);
            props.editUserProfile(userName, phoneNumber);
          }}>
          <Text style={registerStyle.textBtn}>Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({editUserProfile}, dispatch);
};

export default connect(null, mapDispatchToProps)(EditProfile);
