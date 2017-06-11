import {breakpointReducer} from 'redux-breakpoint';
import {combineReducers} from 'redux';

let rootReducer = combineReducers({
    breakpoint: breakpointReducer
})

export default rootReducer;