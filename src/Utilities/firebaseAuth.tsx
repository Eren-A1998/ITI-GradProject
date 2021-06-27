import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



export default class FirebaseUtilities {

  public static signIn = (email, password) => {
  

    
    return auth().signInWithEmailAndPassword(email, password);
  
  };
  
  public static signUp = (email, password) => {

    return auth().createUserWithEmailAndPassword(email, password);
  
  };
  public static signOut = () => {
    return auth().signOut();
  };
  public static  signInWithFacebook = async ()=>{
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
  public static  signInWithGoogle = async ()=>{
    console.log('pressed');
    GoogleSignin.configure({
      webClientId: '',
    });
    // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);

    
  }
  public static getUserId() {
    //navigatMe();
    const loggedInUser = auth().currentUser;
    if (loggedInUser != null) {
      return loggedInUser.uid;
    } else {
      return null;
    }
  }
}
