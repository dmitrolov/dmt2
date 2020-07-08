import { combineReducers } from 'redux';
import { userDataReducer } from './userDataReducer';
import { windowDataReducer } from './windowDataReducer';

export const rootReducer = combineReducers({
    userData: userDataReducer,
    windowData: windowDataReducer,
});
