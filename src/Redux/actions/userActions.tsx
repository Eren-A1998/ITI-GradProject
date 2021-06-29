import FirebaseUtilities from '../../Utilities/firebaseAuth';
import userOperation from './../../Utilities/firebaseDatabase';
import ImageUploderUtility from './../../Utilities/firebaseStorage';


export async function signUpNewUser(userName, email, password, phoneNumber, gender) {
  let payload = null;
  try{
    let res = await FirebaseUtilities.signUp(email, password)
    let id = res.user.uid;
    userOperation.createNewUser(
      id,
      userName,
      email,
      password,
      phoneNumber,
      gender,
    
    );
    payload = {
      id,
      userName,
      email,
      password,
      phoneNumber,
      gender,
      image:undefined
    } 
  }
  catch(error){
    if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
  
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
  }
  
 

    // .then((e) => {
    //   console.log('user Created', e.user.uid);
    //   id = e.user.uid;
    //   // id = FirebaseUtilities.getUserId();
    //   console.log('id->', id);

  
      

    // })
    // .catch(error => {
    //   if (error.code === 'auth/email-already-in-use') {
    //     console.log('That email address is already in use!');
    //   }

    //   if (error.code === 'auth/invalid-email') {
    //     console.log('That email address is invalid!');
    //   }
    // });
     
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

export async function editUserProfile(userName, phoneNumber) {
  let payload ;
  let id = FirebaseUtilities.getUserId();
  console.log('id->', id);
  //this is only for testing
  // let id = 'GAPvSWEanmNif4y5NjSklCyEk002';
  // console.log('id->', id);
  userOperation.updateDataUser(id, userName, phoneNumber);
    // .then(async res => {
    //   console.log('User updated!');
    // })
    // .catch(e => {
    //   console.log('sorry User is not updated -_-', 'error : ', e);
    // });
    let userData = await userOperation.getUserByID(id);
    payload = {id, ...userData} 
    console.log('payload',payload);
  return {
    type: 'EDIT_PROFILE',
    payload,
  };
}

export async function uploadProfileImage(image) {
  let payload = null;
  
  console.log("Zy Ma Aya Bt2ol")
  let link =  await ImageUploderUtility.uploadImageToStorage(image)
  console.log('my Linkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',link);
  let id = FirebaseUtilities.getUserId();
  console.log("ssss",id);
  userOperation.updateProfilePhoto(id, link);
  payload = {
    userImage:link,
    id
  };
  console.log('PayLoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad',payload);
  return {
    type: 'UPLOAD_IMAGE',
    payload,
  };
}
export function getUserID()
{
  let payload = FirebaseUtilities.getUserId();
  console.log("userID payload ",payload)
  return {
    type:'USER_ID',
    payload
  }
}