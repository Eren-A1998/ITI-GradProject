import {Platform} from 'react-native';
import storage from '@react-native-firebase/storage';

export default class ImageUploderUtility {
  public static uploadImageToStorage(image) {
    const {uri} = image;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    console.log(filename, '-->uri', uploadUri);
    const task = storage().ref(filename).putFile(uploadUri);

    return task;
  }
}
