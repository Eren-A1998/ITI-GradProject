import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity,StyleSheet, ScrollView} from 'react-native';
import registerStyle from '../Styles/register';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editUserProfile} from '../Redux/actions/userActions';
import UploadScreen from './ImageUploader';
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const EditProfile = props => {
  const {uploadphoto} = props;
  const {currentUser} = props;
  const [userName, setUserName] = useState(currentUser.userName);
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);

  return (
    <KeyboardAwareScrollView>
      <View style={registerStyle.container}>
      <Text style={{alignSelf:'center', color:'#214358' , fontSize:18 , marginTop:10 , fontWeight:'bold' , fontFamily:'serif'}}>Edit Profile</Text>

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

        <View style={{marginBottom:25}}>
        <Button buttonStyle={{...styles.Pay}} title="Update"onPress={async() => {
          await  props.editUserProfile(userName, phoneNumber);
          await   props.navigation.replace("TabNav");
          }}/>
          </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
    Pay:{
      backgroundColor:'#0074B7',
      alignSelf: 'center',
      borderRadius:50,
      width:'50%',
      height:50,
    }
  });
const mapStateToProps = state => {
  return {
    currentUser:  state.UserReducer.currentUser,
    uploadphoto: state.UserReducer.uploadphoto
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({editUserProfile}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
