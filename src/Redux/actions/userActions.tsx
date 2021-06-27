import FirebaseUtilities from '../../Utilities/firebaseAuth';
import userOperation from './../../Utilities/firebaseDatabase';
import ImageUploderUtility from './../../Utilities/firebaseStorage';


export function signUpNewUser(userName, email, password, phoneNumber, gender) {
  let payload = null;

  FirebaseUtilities.signUp(email, password)
    .then(() => {
      console.log('user Created', userName);
      let id = FirebaseUtilities.getUserId();
      console.log('id->', id);

      payload = userOperation.createNewUser(
        id,
        userName,
        email,
        password,
        phoneNumber,
        gender,
      );
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
    });

  return {
    type: 'SIGN_UP',
    payload,
  };
}

export function signInUser(email, password) {
  let payload = null;
  FirebaseUtilities.signIn(email, password)
    .then(() => {
      payload = FirebaseUtilities.getUserId();
    })
    .catch(e => {
      console.log('Error Sign in', e);
    });

  return {
    type: 'SIGN_IN',
    payload,
  };
}
export function facebookSignIn() {
  let payload = null;
  FirebaseUtilities.signInWithFacebook()
    .then(() => console.log('Signed in with Facebook!'))
    .catch(e => {
      console.log('facebook error ->', e);
    });

  return {
    type: 'FACEBOOK_SIGN_IN',
    payload,
  };
}

export function googleSignIn() {
  let payload = null;
  FirebaseUtilities.signInWithGoogle()
    .then(() => console.log('Signed in with Google!'))
    .catch(e => {
      console.log('google error ->', e);
    });

  return {
    type: 'GOOGLE_SIGN_IN',
    payload,
  };
}

export function editUserProfile(userName, phoneNumber) {
  let payload = null;
  let id = FirebaseUtilities.getUserId();
  console.log('id->', id);
  //this is only for testing
  // let id = 'GAPvSWEanmNif4y5NjSklCyEk002';
  // console.log('id->', id);
  userOperation
    .updateDataUser(id, userName, phoneNumber)
    .then(res => {
      console.log('User updated!', res);
      payload = res;
    })
    .catch(e => {
      console.log('sorry User is not updated -_-', 'error : ', e);
    });

  return {
    type: 'EDIT_PROFILE',
    payload,
  };
}

export function uploadProfileImage(image) {
  let payload = null;

  payload = ImageUploderUtility.uploadImageToStorage(image);
  let id = FirebaseUtilities.getUserId();
  userOperation.updateProfilePhoto(id, image);

  return {
    type: 'UPLOAD_IMAGE',
    payload,
  };
}
