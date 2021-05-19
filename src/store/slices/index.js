import {combineReducers} from 'redux';
import GlobalSlice from './GlobalSlice';

const rootReducers = combineReducers({
    globalSlice: GlobalSlice
})

export default rootReducers;