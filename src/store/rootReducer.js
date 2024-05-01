/* eslint-disable prettier/prettier */
import {combineReducers} from '@reduxjs/toolkit';
// import userReducer from './slices/userSlice';
import colorReducer from './slices/colorslice.js';

const rootReducer = combineReducers({
color: colorReducer,
});

export default rootReducer;
