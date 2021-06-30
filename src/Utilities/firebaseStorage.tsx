import {Platform} from 'react-native';
import storage from '@react-native-firebase/storage';

export default class ImageUploderUtility {
   public static async uploadImageToStorage(image) {
     const {uri} = image;
     
  const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    let res =  await storage().ref(Date.now().toString()+filename).putFile(uploadUri)
    let url = await storage().ref(res.metadata.name).getDownloadURL()
  

     return url;
  }
}
