import {Platform} from 'react-native';
import storage from '@react-native-firebase/storage';

export default class ImageUploderUtility {
   public static async uploadImageToStorage(image) {
     const {uri} = image;
     
  const filename = uri.substring(uri.lastIndexOf('/') + 1);
  console.log('filename',filename)
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    let res =  await storage().ref(Date.now().toString()+filename).putFile(uploadUri)
    let url = await storage().ref(res.metadata.name).getDownloadURL()
  

     return url;
  //   try { 
  //   let res =  (await task).ref.name;
  //   console.log('name' , res);
  //   // console.log('res',res)
  //   // console.log("Ref",res.ref);
  //   // let link  = await res.ref.getDownloadURL();
  //       return res;
  // }

  //   catch(e){
  //     console.log("Photo Error" ,e);
  //   }
  }
}
