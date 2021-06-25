import {combineReducers} from 'redux';
import UserReducer from './userReducer'
import LineReducer from './LinesReducers';
import tripReducer from './tripsReducers';
export default combineReducers ({
    UserReducer,
    LineReducer,
    tripReducer
});