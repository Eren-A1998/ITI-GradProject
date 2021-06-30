import React, {useState} from 'react';
import {View, SafeAreaView,StyleSheet, TouchableOpacity, Alert, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Styles/imagePickerStyle';
import ImagePickerUtility from '../Utilities/imageUploader';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {uploadProfileImage} from '../Redux/actions/userActions';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'


const UploadScreen = props => {
  const [image, setImage] = useState(null);
  const {userImage} = props; 
  const {user} = props;
  const [successAlert, setSuccessAlert] = useState(false);
  const [faildAlert, setFaildAlert] = useState(false);

  const openSuccessAlert = () => {
    setSuccessAlert(true);
  }

  const closeSuccessAlert = () => {
    setSuccessAlert(false);
  }

  const openFaildAlert = () => {
    setFaildAlert(true);
  }

  const closeFaildAlert = () => {
    setFaildAlert(false);
  }


  let malePhoto = 'https://appvital.com/images/profile/file-uploader-api-profile-avatar-2.jpg';
  let femalePhoto = 'https://www.independencebigs.org/wp-content/uploads/2018/08/bio-thumb-female-default.png';

  let img =image==null?user.image==undefined?userImage==undefined?user.gender=='female'?femalePhoto:malePhoto:userImage.userImage:user.image:image.uri;
  //image url that will be store in firebase
  return (
    <SafeAreaView style={styles.container}>
      <SCLAlert
        theme="success"
        show={successAlert}
        title="Done"
        titleStyle={{ color: 'green' }}
        cancellable={false}
        subtitle={"Photo Uploaded"}
        onRequestClose={closeSuccessAlert}>
        <SCLAlertButton theme="default" onPress={closeSuccessAlert}>Close</SCLAlertButton>
      </SCLAlert>
      <SCLAlert
        theme="danger"
        show={faildAlert}
        title="Failed"
        titleStyle={{ color: 'red' }}
        cancellable={false}
        subtitle={"No Photo Selected"}
        onRequestClose={closeFaildAlert}>
        <SCLAlertButton theme="default" onPress={closeFaildAlert}>Close</SCLAlertButton>
      </SCLAlert>
      <View style={styles.imageContainer}>
        {/* {image !== null ? ( */}
          <Image source={{uri: img}} style={styles.imageBox} />
        {/*  ) : null} */}
      </View>
      <View style={{flex:1, flexDirection:'row'}}>
      <TouchableOpacity 
        style={styles.selectButton}
        onPress={() => {
          ImagePickerUtility.imageFromGallary()
            .then(image => {
              const source = {uri: image.path};
              setImage(source);
            })
            .catch(e => {
            });
        }}>
        <Icon name="image" color="white" size={30} ></Icon>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.selectButton }
        onPress={() => {
          if (image !== null) {
            props.uploadProfileImage(image);
            openSuccessAlert();

          } else {
            openFaildAlert();

            }
        }}>
        <Icon name="upload" color="white" size={30} />
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create

  ({

    Pay:{
      backgroundColor:'#0074B7',
      alignSelf: 'center',
      borderRadius:50,
      width:'50%',
      height:50,
      marginTop:25
    }
  });


const mapDispatchToProps = dispatch => {
  return bindActionCreators({uploadProfileImage}, dispatch);
};

export default connect(null, mapDispatchToProps)(UploadScreen);
