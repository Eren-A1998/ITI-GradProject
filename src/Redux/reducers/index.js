import {combineReducers} from 'redux';
import UserReducer from './userReducer'
import LineReducer from './LinesReducers';
export default combineReducers ({
    UserReducer,
    LineReducer
});