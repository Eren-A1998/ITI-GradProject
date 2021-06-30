const UserReducer = (state = {}, action) => {
  switch (action.type) {
    
    case 'USER_ID':
      return{...state,userID:action.payload,currentUser: action.payload}
    case 'CLEAR_USER':
      return{...state,userID:action.payload,currentUser: action.payload,uploadphoto:action.payload}
    case 'SIGN_UP':
      return {...state, currentUser: action.payload};
    case 'SIGN_IN':
      return {...state, currentUser: action.payload};
      case 'SIGN_OUT':
      return {...state, currentUser: action.payload,userID:action.payload};
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
