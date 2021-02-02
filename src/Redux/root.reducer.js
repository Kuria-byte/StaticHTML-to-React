import { combineReducers } from 'redux';

import mobileReducer from './Mobile/mobile.reducer'
import userReducer from './User/user.reducer'

export default combineReducers({
    menu : mobileReducer,
    user : userReducer
});