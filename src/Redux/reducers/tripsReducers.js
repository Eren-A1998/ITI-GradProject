const tripReducer = (state={},action)=>
{
    switch(action.type)
    {
        case 'ADD_TRIP':
            return {...state,trip:action.payload}

        case 'PREV_TRIP':
            return {...state,prevtrips:action.payload}

        case 'UPCOMING_TRIP':
            return {...state,upcomingtrips:action.payload}

        default:{return state}
    }

}
export default tripReducer;