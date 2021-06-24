const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return {...state, message: action.payload};
    case 'SIGN_IN':
      return {...state, currentUser: action.payload};
    case 'FACEBOOK_SIGN_IN':
      return {...state, currentUser: action.payload};
    case 'GOOGLE_SIGN_IN':
      return {...state, currentUser: action.payload};
    case 'EDIT_PROFILE':
      return {...state, currentUser: action.payload};
    default:
      return {...state, currentUser: action.payload};
  }
};
export default UserReducer;
