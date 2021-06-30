import FirebaseUtilities from '../../Utilities/firebaseAuth';
import userOperation from './../../Utilities/firebaseDatabase';
import ImageUploderUtility from './../../Utilities/firebaseStorage';




export async function signUpNewUser(userName, email, password, phoneNumber, gender) {
  let payload = null;
  try{
     await FirebaseUtilities.checkEmailIsExist(email)
      
    let res = await FirebaseUtilities.signUp(email, password)
    let id = res.user.uid;
  await  userOperation.createNewUser(
      id,
      userName,
      email,
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
          return {
            type: 'SIGN_UP',
            payload,
          };
        }
  
        if (error.code === 'auth/invalid-email') {
          return {
            type: 'SIGN_UP',
            payload,
          };
        }
  }
  return {
    type: 'SIGN_UP',
    payload,
  };
}

export async function signInUser(email, password) {
  let payload = null;
  try{
  let res  = await FirebaseUtilities.signIn(email, password);
  let id = res.user.uid;
  let user  =  await userOperation.getUserByID(id)
  payload = {
    id,...user
  }
}catch(e){
  if(e.code=="auth/invalid-email"){
    return {
      type: 'SIGN_IN',
      payload,
    }
  }
  if(e.code=="auth/user-not-found"){
    return {
      type: 'SIGN_IN',
      payload,
    }
  }
  if(e.code=="auth/wrong-password"){
    return {
      type: 'SIGN_IN',
      payload,
    }
  }
} 
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

export  function clearUser() {
  return {
    type: 'CLEAR_USER',
    payload:{},
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
  let id = FirebaseUtilities.getUserId().uid;
 await userOperation.updateDataUser(id, userName, phoneNumber);
    let userData = await userOperation.getUserByID(id);
    payload = {id, ...userData} 
  return {
    type: 'EDIT_PROFILE',
    payload,
  };
}

export async function uploadProfileImage(image) {
  let payload = null;
  
  let link =  await ImageUploderUtility.uploadImageToStorage(image)
  let id = FirebaseUtilities.getUserId().uid;
  userOperation.updateProfilePhoto(id, link);
  payload = {
    userImage:link,
    id
  };
  return {
    type: 'UPLOAD_IMAGE',
    payload,
  };
}


export async function logOut()
{
  let payload = {}
    await FirebaseUtilities.signOut();

return {
  type:"SIGN_OUT",
  payload
}
}

export async function getUserID()
{
  let payload;
  let res = FirebaseUtilities.getUserId();
  if(res!=null){
  let user =  await userOperation.getUserByID(res.uid)
  let id = res.uid
   payload = {...user , id}
  }
  return {
    type:'USER_ID',
    payload
  }
}