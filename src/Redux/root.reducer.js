import { combineReducers } from 'redux';

import mobileReducer from './Mobile/mobile.reducer'

export default combineReducers({
    menu : mobileReducer
});