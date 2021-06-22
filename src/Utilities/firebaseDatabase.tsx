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
}
