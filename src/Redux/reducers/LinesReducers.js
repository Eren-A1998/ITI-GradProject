const LineReducer = (state={},action)=>
{
    switch(action.type)
    {
        case 'GET_LINES':
            return {...state,Lines:action.payload}
        default:{return state}
    }

}
export default LineReducer;
