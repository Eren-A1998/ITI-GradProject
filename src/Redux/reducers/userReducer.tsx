const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_ID':
      console.log("from reduser",action.payload)
      return{...state,userID: action.payload}
    case 'SIGN_UP':
      return {...state, currentUser: action.payload};
    case 'SIGN_IN':
      return {...state, currentUser: action.payload};
    case 'FACEBOOK_SIGN_IN':
      return {...state, currentUser: action.payload};
    case 'GOOGLE_SIGN_IN':
      return {...state, currentUser: action.payload};
    case 'EDIT_PROFILE':
      return {...state, currentUser: action.payload};
    case 'UPLOAD_IMAGE':
      return {...state, uploadphoto: action.payload};
      default:{return state}
  }
};
export default UserReducer;
