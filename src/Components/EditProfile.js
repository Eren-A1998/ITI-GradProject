import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import registerStyle from '../Styles/register';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editUserProfile} from '../Redux/actions/userActions';
import UploadScreen from './ImageUploader';
const EditProfile = props => {


  const {uploadphoto} = props;
  const {currentUser} = props;
  console.log("ediiit", currentUser);
  const [userName, setUserName] = useState(currentUser.userName);
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);
  console.log(uploadphoto);

  return (
    <ScrollView>
      <View style={registerStyle.container}>
        <UploadScreen userImage={uploadphoto} user={currentUser} />
        <View style={{marginTop: 20}}>
          <Input
            style={registerStyle.inputStyle}
            value={userName}
            keyboardType="ascii-capable"
            placeholder="User Name"
            leftIcon={<Icon name="user" style={registerStyle.iconStyle} />}
            onChangeText={value => setUserName(value)}
          />
          <Input
            style={registerStyle.inputStyle}
            value={phoneNumber}
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
const mapStateToProps = state => {
  console.log(state)
  return {
    currentUser:  state.UserReducer.currentUser,
    uploadphoto: state.UserReducer.uploadphoto
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({editUserProfile}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
