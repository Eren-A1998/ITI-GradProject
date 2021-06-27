import React, {useState} from 'react';
import {View, SafeAreaView, TouchableOpacity, Alert, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Styles/imagePickerStyle';
import ImagePickerUtility from '../Utilities/imageUploader';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {uploadProfileImage} from '../Redux/actions/userActions';

const UploadScreen = props => {
  const [image, setImage] = useState(null); //image url that will be store in firebase
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        {image !== null ? (
          <Image source={{uri: image.uri}} style={styles.imageBox} />
        ) : null}
      </View>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => {
          ImagePickerUtility.imageFromGallary()
            .then(image => {
              console.log('image uploaded', image);
              const source = {uri: image.path};
              console.log(source);
              setImage(source);
            })
            .catch(e => {
              console.log('image error', e);
            });
        }}>
        <Icon name="image" style={styles.buttonText}></Icon>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.uploadButton }
        onPress={() => {
          if (image !== null) {
            props.uploadProfileImage(image);
            Alert.alert(
              'Photo uploaded!',
              'Your photo has been uploaded to Firebase Cloud Storage!',
            );
          } else {
            Alert.alert('No Photo Selected!', 'Please Select any photo frist');
          }
        }}>
        <Icon name="upload" style={styles.buttonText} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};



const mapDispatchToProps = dispatch => {
  return bindActionCreators({uploadProfileImage}, dispatch);
};

export default connect(null, mapDispatchToProps)(UploadScreen);
