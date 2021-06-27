import firestore from '@react-native-firebase/firestore';

export default class userOperation {
  static usersCollection = firestore().collection('Users');
  public static createNewUser(
    id,
    userName,
    email,
    password,
    phoneNumber,
    gender,
  ) {
    console.log(userName, id);
    this.usersCollection
      .doc(id)
      .set({userName, email, password, phoneNumber, gender})
      .then(() => {
        console.log('added to store', userName);
      })
      .catch(e => {
        console.log('store error', e);
      });
  }
  public static updateDataUser(id, userName, phoneNumber) {
    const editedUser = this.usersCollection.doc(id).update({
      userName: userName,
      phoneNumber: phoneNumber,
    });
    return editedUser;
  }
  public static updateProfilePhoto(id, image) {
    this.usersCollection
      .doc(id)
      .update({
        image: image.uri,
      })
      .then(() => {
        console.log('image added', image);
      })
      .catch(e => {
        console.log('image error', e);
      });
  }
}
