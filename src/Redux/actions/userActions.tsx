import FirebaseUtilities from '../../Utilities/firebaseAuth';
import userOperation from './../../Utilities/firebaseDatabase';

export function signUpNewUser(
  userName,
  email,
  password,
  phoneNumber,
  gender,
) {
  let payload = null;
  FirebaseUtilities.signUp(email, password)
    .then(() => {
      console.log('user Created', userName);
      let id = FirebaseUtilities.getUserId();
      console.log('id->', id);

      payload =  userOperation.createNewUser(id, userName, email, password, phoneNumber, gender);
      
    })
    .catch(e => {
      console.log('Error Sign up', e);
    });

    return {
      type:'SIGN_UP',
      payload
    }
}

export function signInUser(
  email,
  password
) {
  let payload = null;
  FirebaseUtilities.signIn(email, password)
    .then(() => {
      
      payload = FirebaseUtilities.getUserId();
    })
    .catch(e => {
      console.log('Error Sign in', e);
    });

    return {
      type:'SIGN_IN',
      payload
    }
}
export function facebookSignIn() {
  let payload = null;
  FirebaseUtilities.signInWithFacebook()
              .then(() => console.log('Signed in with Facebook!'))
              .catch(e => {
                console.log('facebook error ->', e)})

    return {
      type:'FACEBOOK_SIGN_IN',
      payload
    }
}

export function googleSignIn() {
  let payload = null;
  FirebaseUtilities.signInWithGoogle()
  .then(() => console.log('Signed in with Google!'))
  .catch(e => {
    console.log('google error ->', e);})

    return {
      type:'GOOGLE_SIGN_IN',
      payload
    }
}

