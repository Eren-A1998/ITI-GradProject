import firestore from '@react-native-firebase/firestore';

export default class userOperation {
  static usersCollection = firestore().collection('Users');
  public static  async createNewUser(id,userName,email,phoneNumber,gender) {
   await this.usersCollection
      .doc(id)
      .set({userName, email, phoneNumber, gender})
 
      
  }
  public static async updateDataUser(id, userName, phoneNumber) {
       await this.usersCollection.doc(id).update({
      userName: userName,
      phoneNumber: phoneNumber,
    });
  }
  public static  async updateProfilePhoto(id, image) {
    await this.usersCollection
      .doc(id)
      .update({
        image: image
      })
  }
  public static async getUserByID(id) {
    const User = await this.usersCollection.doc(id).get();
    return User.data();
  }
}
