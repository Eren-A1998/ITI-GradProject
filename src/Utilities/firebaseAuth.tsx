import auth from '@react-native-firebase/auth';

export default class FirebaseUtilities {
  public static signIn = (email, password) => {
    return auth().signInWithEmailAndPassword(email, password);
  };
  public static signUp = (email, password) => {
    return auth().createUserWithEmailAndPassword(email, password);
  };
  public static signOut = (email, password) => {
    return auth().signOut();
  };
  public static getUserId() {
    const loggedInUser = auth().currentUser;
    if (loggedInUser != null) {
      return loggedInUser.uid;
    } else {
      return 'no id is captured';
    }
  }
}
