import firestore from '@react-native-firebase/firestore';

export default class userOperation {
  static usersCollection = firestore().collection('Users');
  public static  createNewUser(id,userName,email,password,phoneNumber,gender) {
    console.log(userName, id);
    this.usersCollection
      .doc(id)
      .set({userName, email, password, phoneNumber, gender})
      .then(() => {
        console.log('Done');
      })
      .catch(e => {
        console.log('store error', e);
      });
      
  }
  public static async updateDataUser(id, userName, phoneNumber) {
       await this.usersCollection.doc(id).update({
      userName: userName,
      phoneNumber: phoneNumber,
    });
  }
  public static  updateProfilePhoto(id, image) {
    console.log("Hi From updateProfilePhoto" , id)
     this.usersCollection
      .doc(id)
      .update({
        image: image
      })
      .then(() => {
        console.log('image added', image);
      })
      .catch(e => {
        console.log('image error', e);
      });
  }
  public static async getUserByID(id) {
    const User = await this.usersCollection.doc(id).get();
    return User.data();
  }
}
