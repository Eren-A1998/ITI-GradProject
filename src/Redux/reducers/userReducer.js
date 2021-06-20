const UserReducer = (state={},action)=>
{
    switch(action.type)
    {
        case 'ADD_User':
            return {...state,message:action.payload}
        case 'GET_User':
            return {...state,currentUser:action.payload}
        default:return {...state,currentUser:action.payload}
    }

}
export default UserReducer;
